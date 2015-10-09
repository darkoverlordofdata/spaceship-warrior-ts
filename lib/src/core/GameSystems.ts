/**
 * core/GameSystems.ts
 *
 * The main game loop
 *
 */
module example.core {

  import World = artemis.World;
  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import Entity = artemis.Entity;

  import BackgroundSystem = example.systems.BackgroundSystem;
  import CollisionSystem = example.systems.CollisionSystem;
  import ColorAnimationSystem = example.systems.ColorAnimationSystem;
  import EntitySpawningTimerSystem = example.systems.EntitySpawningTimerSystem;
  import ExpiringSystem = example.systems.ExpiringSystem;
  import HealthRenderSystem = example.systems.HealthRenderSystem;
  import HudRenderSystem = example.systems.HudRenderSystem;
  import MovementSystem = example.systems.MovementSystem;
  import ParallaxStarRepeatingSystem = example.systems.ParallaxStarRepeatingSystem;
  import PlayerInputSystem = example.systems.PlayerInputSystem;
  import RemoveOffscreenShipsSystem = example.systems.RemoveOffscreenShipsSystem;
  import ScaleAnimationSystem = example.systems.ScaleAnimationSystem;
  import SoundEffectSystem = example.systems.SoundEffectSystem;
  import SpriteRenderSystem = example.systems.SpriteRenderSystem;
  import Constants = example.core.Constants;
  import PlayerTemplate = example.templates.PlayerTemplate;


  export class GameSystems {

    public score;
    public world:World;
    public bg:Entity;
    public status:Entity;
    public credits:Entity;
    public leaderboard:Entity;
    public about:Entity;

    private spriteRenderSystem:SpriteRenderSystem;
    private healthRenderSystem:HealthRenderSystem;
    private hudRenderSystem:HudRenderSystem;

    constructor(protected webgl:boolean) {

      artemis.utils.TrigLUT.init(true);
      this.score = EntitySystem.blackBoard.getEntry('score');

      var world:World = this.world = new artemis.World();

      world.setManager(new GroupManager());
      world.setSystem(new MovementSystem());
      world.setSystem(new PlayerInputSystem());
      world.setSystem(new SoundEffectSystem());
      world.setSystem(new CollisionSystem());
      world.setSystem(new ExpiringSystem());
      world.setSystem(new EntitySpawningTimerSystem());
      if (webgl) {
        world.setSystem(new BackgroundSystem());
      } else {
        world.setSystem(new ParallaxStarRepeatingSystem());
        world.setSystem(new ColorAnimationSystem());
      }
      world.setSystem(new ScaleAnimationSystem());
      world.setSystem(new RemoveOffscreenShipsSystem());

      this.spriteRenderSystem = world.setSystem(new SpriteRenderSystem(), true);
      this.healthRenderSystem = world.setSystem(new HealthRenderSystem(), true);
      this.hudRenderSystem = world.setSystem(new HudRenderSystem(), true);

      world.initialize();

      world.createEntityFromTemplate('gui', this).addToWorld();
    }

    start() {

      this.score.score = 0;
      var world = this.world;

      world.createEntityFromTemplate('player').addToWorld();
      for (var life=0; life<3; life++) {
        world.createEntityFromTemplate('life', life).addToWorld();
      }
      this.status = world.createEntityFromTemplate('status');
      this.status.addToWorld();
      this.hudRenderSystem.setStatus(this.status);

      if (this.webgl) {
        this.bg = world.createEntityFromTemplate('background');
        this.bg.addToWorld();
      } else {
        for (var i = 0; 500 > i; i++) {
          world.createEntityFromTemplate('star').addToWorld();
        }
      }

    }

    stop() {
      this.bg.deleteFromWorld();
      this.status.deleteFromWorld();
    }

    showCredits() {
      this.credits = this.world.createEntityFromTemplate('credits', [Constants.about, Constants.credits]);
      this.credits.addToWorld();
    }

    hideCredits() {
      if (this.about) this.about.deleteFromWorld();
      if (this.credits)this.credits.deleteFromWorld();
    }

    showLeaderboard() {
      this.leaderboard = this.world.createEntityFromTemplate('leaderboard');
      this.leaderboard.addToWorld();
    }

    hideLeaderboard() {
      this.leaderboard.deleteFromWorld();
    }

    public update(delta:number) {

      this.world.setDelta(delta);
      this.world.process();

      this.spriteRenderSystem.process();
      this.healthRenderSystem.process();
      this.hudRenderSystem.process();
    }
  }
}

