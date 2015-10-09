module example.systems {

  import ImmutableBag = artemis.utils.ImmutableBag;

  import Bag = artemis.utils.Bag;
  import Gui = example.components.Gui;
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

  import MenuView = example.views.MenuView;

  export class CollisionSystem extends EntitySystem {
    @Mapper(Position) pm:ComponentMapper<Position>;
    @Mapper(Sprite) sm:ComponentMapper<Sprite>;
    @Mapper(Bounds) bm:ComponentMapper<Bounds>;
    @Mapper(Health) hm:ComponentMapper<Health>;
    @Mapper(Expires) ex:ComponentMapper<Expires>;

    private collisionPairs:Bag<CollisionPair>;
    private groupManager:GroupManager;
    private timer:Timer;
    private score;
    private enemies:ImmutableBag<Entity>;
    private players:ImmutableBag<Entity>;
    private bullets:ImmutableBag<Entity>;
    private mines:ImmutableBag<Entity>;

    constructor() {
      super(Aspect.getAspectForAll(Position, Bounds));
    }


    public initialize() {
      var world = this.world;

      this.score = EntitySystem.blackBoard.getEntry('score');
      this.groupManager = <GroupManager>world.getManager(GroupManager);
      this.collisionPairs = new Bag<CollisionPair>();
      this.enemies = world.getManager<GroupManager>(GroupManager).getEntities(Groups.ENEMY_SHIPS);
      this.players = world.getManager<GroupManager>(GroupManager).getEntities(Groups.PLAYER_SHIP);
      this.bullets = world.getManager<GroupManager>(GroupManager).getEntities(Groups.PLAYER_BULLETS);
      this.mines = world.getManager<GroupManager>(GroupManager).getEntities(Groups.ENEMY_MINES);

      /** Check for bullets hitting enemy ship */
      this.collisionPairs.add(new CollisionPair(this, this.bullets, this.enemies, {

        handleCollision: (bullet:Entity, ship:Entity) => {
          var bp:Position = this.pm.get(bullet);
          var health:Health = this.hm.get(ship);
          var position:Position = this.pm.get(ship);

          world.createEntityFromTemplate('small', bp.x, bp.y).addToWorld();
          for (var i = 0; 4 > i; i++) {
            world.createEntityFromTemplate('particle', bp.x, bp.y).addToWorld();
          }

          bullet.deleteFromWorld();
          health.health -= 1;
          if (health.health < 0) {
            this.score.score += health.maximumHealth;
            health.health = 0;
            ship.deleteFromWorld();
            world.createEntityFromTemplate('big', position.x, position.y).addToWorld();

          }
        }
      }));

      /** Check for enemy mines hitting player ship */
      this.collisionPairs.add(new CollisionPair(this, this.mines, this.players, {

        handleCollision: (mine:Entity, ship:Entity) => {
          var health:Health = this.hm.get(ship);
          var position:Position = this.pm.get(ship);

          mine.deleteFromWorld();
          health.health -= this.hm.get(mine).health;
          if (health.health < 0) {
            health.health = 0;
            ship.deleteFromWorld();
            world.createEntityFromTemplate('huge', position.x, position.y).addToWorld();
            var lives = this.groupManager.getEntities(Groups.PLAYER_LIVES);
            if (lives.size() === 0) {
              /** Game Over!! */
              var game:Game = <Game>EntitySystem.blackBoard.getEntry('game');
              game.systems.stop();
              var gui = EntitySystem.blackBoard.getEntry<MenuView>('gui');
              gui.show();
              Properties.setScore(this.score.score);

            } else {
              var life:Entity = lives.get(0);
              life.deleteFromWorld();
              this.groupManager.remove(life, Groups.PLAYER_LIVES);
              this.timer = new Timer(1, true);
              this.timer.execute = () => {
                world.createEntityFromTemplate('player').addToWorld();
                this.timer = null;
              };
            }
          }
        }
      }));
    }


    protected processEntities(entities:ImmutableBag<Entity>) {

      if (this.enemies.size() === 0) {
        /**
         * You cleared the screen
         *
         * Get a POWER-UP!!
         *
         */
        var players = this.players;
        if (players.size() > 0) {
          var player = players.get(0);
          var health:Health = this.hm.get(player);
          var sprite:Sprite = this.sm.get(player);
          health.health = health.maximumHealth;
          sprite.sprite_.filters = null;
        }
      } else {

        var collisionPairs = this.collisionPairs;
        for (var i = 0, l = collisionPairs.size(); l > i; i++) {
          collisionPairs.get(i).checkForCollisions();
        }
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

    constructor(cs:CollisionSystem, group1, group2, handler:CollisionHandler) {
      this.groupEntitiesA = group1;
      this.groupEntitiesB = group2;
      this.handler = handler;
      this.cs = cs;
    }

    public checkForCollisions() {
      var handler = this.handler;
      var groupEntitiesA = this.groupEntitiesA;
      var groupEntitiesB = this.groupEntitiesB;
      var sizeA = groupEntitiesA.size();
      var sizeB = groupEntitiesB.size();

      for (var a = 0; sizeA > a; a++) {
        var entityA:Entity = groupEntitiesA.get(a);
        for (var b = 0; sizeB > b; b++) {
          var entityB:Entity = groupEntitiesB.get(b);
          if (this.collisionExists(entityA, entityB)) {
            handler.handleCollision(entityA, entityB);
          }
        }
      }
    }

    private collisionExists(e1:Entity, e2:Entity):boolean {

      if (e1 === null || e2 === null) return false;

      var pm = this.cs.pm;
      var bm = this.cs.bm;

      //NPE!!!
      var p1:Position = pm.get(e1);
      var p2:Position = pm.get(e2);

      var b1:Bounds = bm.get(e1);
      var b2:Bounds = bm.get(e2);

      var a = p1.x - p2.x;
      var b = p1.y - p2.y;
      var r = Constants.RATIO;
      return Math.sqrt(a * a + b * b) - (b1.radius/r) < (b2.radius/r);
    }
  }

  interface CollisionHandler {
    handleCollision(a:Entity, b:Entity);
  }
}

