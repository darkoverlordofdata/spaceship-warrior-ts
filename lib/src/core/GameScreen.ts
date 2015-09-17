module example.core {

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
  import World = artemis.World;
  import GroupManager = artemis.managers.GroupManager;
  import Constants = example.core.Constants;
  import EntitySystem = artemis.EntitySystem;
  import PlayerTemplate = example.templates.PlayerTemplate;


  export class GameScreen {

    private world:World;

    private spriteRenderSystem:SpriteRenderSystem;
    private healthRenderSystem:HealthRenderSystem;
    private hudRenderSystem:HudRenderSystem;

    constructor(sprites, resources) {

      EntitySystem.blackBoard.setEntry('sprites', sprites);

      var world:World = this.world = new artemis.World();

      world.setManager(new GroupManager());
      world.setSystem(new MovementSystem());
      world.setSystem(new PlayerInputSystem(sprites));
      world.setSystem(new SoundEffectSystem());
      world.setSystem(new CollisionSystem(sprites));
      world.setSystem(new ExpiringSystem());
      world.setSystem(new EntitySpawningTimerSystem());
      world.setSystem(new ParallaxStarRepeatingSystem());
      world.setSystem(new ColorAnimationSystem());
      world.setSystem(new ScaleAnimationSystem());
      world.setSystem(new RemoveOffscreenShipsSystem());

      this.spriteRenderSystem = world.setSystem(new SpriteRenderSystem(sprites, resources), true);
      this.healthRenderSystem = world.setSystem(new HealthRenderSystem(sprites), true);
      this.hudRenderSystem = world.setSystem(new HudRenderSystem(sprites), true);

      world.initialize();
      world.createEntityFromTemplate('player').addToWorld();

      for (var i = 0; 500 > i; i++) {
        world.createEntityFromTemplate('star').addToWorld();
      }

    }

    public render(delta:number) {

      this.world.setDelta(delta);
      this.world.process();

      this.spriteRenderSystem.process();
      this.healthRenderSystem.process();
      this.hudRenderSystem.process();
    }


  }
}

