/**
 * systems/BackgroundSystem.ts
 *
 * Display player status
 */
module example.systems {

  import Background = example.components.Background;
  import Sprite = example.components.Sprite;

  import Aspect = artemis.Aspect;
  import ComponentMapper = artemis.ComponentMapper;
  import Entity = artemis.Entity;
  import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
  import Mapper = artemis.annotations.Mapper;
  import MathUtils = artemis.utils.MathUtils;

  export class BackgroundSystem extends EntityProcessingSystem {
    @Mapper(Background) bm:ComponentMapper<Background>;
    @Mapper(Sprite) sm:ComponentMapper<Sprite>;

    constructor() {
      super(Aspect.getAspectForAll(Background, Sprite));
    }

    public processEach(e:Entity) {
      var background = this.bm.get(e);
      var sprite = this.sm.get(e).sprite_;

      var uniforms = background.filter.uniforms;
      var time = uniforms.time;

      if (time.value === 0) {
        time.value = MathUtils.nextInt(1000)+500;
      } else {
        time.value += this.world.delta;
      }
      //uniforms.time.value += this.world.delta;
      var value = uniforms.resolution.value = [window.innerHeight, window.innerWidth];
      sprite.height = value[0] = window.innerHeight;
      sprite.width = value[1] = window.innerWidth;

    }
  }
}

