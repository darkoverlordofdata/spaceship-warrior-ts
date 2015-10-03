module example.systems {

  import ImmutableBag = artemis.utils.ImmutableBag;

  import Bag = artemis.utils.Bag;
  import Bounds = example.components.Bounds;
  import ColorAnimation = example.components.ColorAnimation;
  import Expires = example.components.Expires;
  import Health = example.components.Health;
  import ParallaxStar = example.components.ParallaxStar;
  import Player = example.components.Player;
  import Position = example.components.Position;
  import ScaleAnimation = example.components.ScaleAnimation;
  import SoundEffect = example.components.SoundEffect;
  import Sprite = example.components.Sprite;
  import Velocity = example.components.Velocity;
  import Constants = example.core.Constants;
  import Groups = example.core.Groups;
  import Mapper = artemis.annotations.Mapper;
  import Timer = artemis.utils.Timer;
  import Game = example.core.Game;
  import GameSystems = example.core.GameSystems;
  import Properties = example.core.Properties;

  import EntitySystem = artemis.EntitySystem;
  import ComponentMapper = artemis.ComponentMapper;
  import Aspect = artemis.Aspect;
  import Entity = artemis.Entity;
  import GroupManager = artemis.managers.GroupManager;
  import Container = PIXI.Container;


  export class CollisionSystem extends EntitySystem {
    @Mapper(Position) pm:ComponentMapper<Position>;
    @Mapper(Bounds) bm:ComponentMapper<Bounds>;
    @Mapper(Health) hm:ComponentMapper<Health>;
    @Mapper(Expires) ex:ComponentMapper<Expires>;

    private collisionPairs:Bag<CollisionPair>;
    private groupManager:GroupManager;
    private timer:Timer;
    private score;

    constructor() {
      super(Aspect.getAspectForAll(Position, Bounds));
    }


    public initialize() {
      this.score = EntitySystem.blackBoard.getEntry('score');
      this.groupManager = <GroupManager>this.world.getManager(GroupManager);
      this.collisionPairs = new Bag<CollisionPair>();

      /** Check for bullets hitting enemy ship */
      this.collisionPairs.add(new CollisionPair(this, Groups.PLAYER_BULLETS, Groups.ENEMY_SHIPS, {

        handleCollision: (bullet:Entity, ship:Entity) => {
          var bp:Position = this.pm.get(bullet);
          var health:Health = this.hm.get(ship);
          var position:Position = this.pm.get(ship);

          this.world.createEntityFromTemplate('small', bp.x, bp.y).addToWorld();
          for (var i = 0; 4 > i; i++) {
            this.world.createEntityFromTemplate('particle', bp.x, bp.y).addToWorld();
          }

          bullet.deleteFromWorld();
          health.health -= 1;
          if (health.health < 0) {
            this.score.score += health.maximumHealth;
            health.health = 0;
            ship.deleteFromWorld();
            this.world.createEntityFromTemplate('big', position.x, position.y).addToWorld();

          }
        }
      }));

      /** Check for enemy mines hitting player ship */
      this.collisionPairs.add(new CollisionPair(this, Groups.ENEMY_MINES, Groups.PLAYER_SHIP, {

        handleCollision: (mine:Entity, ship:Entity) => {
          var bp:Position = this.pm.get(mine);
          var health:Health = this.hm.get(ship);
          var position:Position = this.pm.get(ship);

          mine.deleteFromWorld();
          health.health -= this.hm.get(mine).health;
          if (health.health < 0) {
            health.health = 0;
            ship.deleteFromWorld();
            this.world.createEntityFromTemplate('huge', position.x, position.y).addToWorld();
            var lives = this.groupManager.getEntities(Groups.PLAYER_LIVES);
            if (lives.size() === 0) {
              /** Game Over!! */
              var game:Game = <Game>EntitySystem.blackBoard.getEntry('game');
              game.showLeaderboard(this.score.score);

            } else {
              var life:Entity = lives.get(0);
              life.deleteFromWorld();
              this.groupManager.remove(life, Groups.PLAYER_LIVES);
              this.timer = new Timer(1, true);
              this.timer.execute = () => {
                this.world.createEntityFromTemplate('player').addToWorld();
                this.timer = null;
              };
            }
          }
        }
      }));
    }


    protected processEntities(entities:ImmutableBag<Entity>) {
      for (var i = 0; this.collisionPairs.size() > i; i++) {
        this.collisionPairs.get(i).checkForCollisions();
      }
      if (this.timer) {
        this.timer.update(this.world.delta);
      }
    }


    protected checkProcessing():boolean {
      return true;
    }


  }
  class CollisionPair {
    private groupEntitiesA:ImmutableBag<Entity>;
    private groupEntitiesB:ImmutableBag<Entity>;
    private handler:CollisionHandler;
    private cs:CollisionSystem;

    constructor(cs:CollisionSystem, group1:Groups, group2:Groups, handler:CollisionHandler) {
      this.groupEntitiesA = cs.world.getManager<GroupManager>(GroupManager).getEntities(group1);
      this.groupEntitiesB = cs.world.getManager<GroupManager>(GroupManager).getEntities(group2);
      this.handler = handler;
      this.cs = cs;
    }

    public checkForCollisions() {
      for (var a = 0; this.groupEntitiesA.size() > a; a++) {
        var entityA:Entity = this.groupEntitiesA.get(a);
        for (var b = 0; this.groupEntitiesB.size() > b; b++) {
          var entityB:Entity = this.groupEntitiesB.get(b);
          if (this.collisionExists(entityA, entityB)) {
            this.handler.handleCollision(entityA, entityB);
          }
        }
      }
    }

    private collisionExists(e1:Entity, e2:Entity):boolean {

      if (e1 === null || e2 === null) return false;

      //NPE!!!
      var p1:Position = this.cs.pm.get(e1);
      var p2:Position = this.cs.pm.get(e2);

      var b1:Bounds = this.cs.bm.get(e1);
      var b2:Bounds = this.cs.bm.get(e2);

      var a = p1.x - p2.x;
      var b = p1.y - p2.y;
      return Math.sqrt(a * a + b * b) - (b1.radius/Constants.RATIO) < (b2.radius/Constants.RATIO);
    }
  }

  interface CollisionHandler {
    handleCollision(a:Entity, b:Entity);
  }
}

