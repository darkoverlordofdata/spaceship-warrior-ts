module example.systems {

  import Background = example.components.Background;
  import Sprite = example.components.Sprite;

  import Aspect = artemis.Aspect;
  import ComponentMapper = artemis.ComponentMapper;
  import Entity = artemis.Entity;
  import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
  import Mapper = artemis.annotations.Mapper;

  export class BackgroundSystem extends EntityProcessingSystem {
    @Mapper(Background) bm:ComponentMapper<Background>;
    @Mapper(Sprite) sm:ComponentMapper<Sprite>;

    constructor() {
      super(Aspect.getAspectForAll(Background, Sprite));
    }

    public processEach(e:Entity) {
      var background = this.bm.get(e);
      var sprite = this.sm.get(e);

      var uniforms = background.filter.uniforms;
      uniforms.time.value += this.world.delta;
      uniforms.resolution.value = [window.innerHeight, window.innerWidth];
      var value = uniforms.resolution.value;
      sprite.sprite_.height = value[0] = window.innerHeight;
      sprite.sprite_.width = value[0] = window.innerWidth;

    }
  }
}

