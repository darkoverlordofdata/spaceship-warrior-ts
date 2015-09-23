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

      background.filter.uniforms.time.value = performance.now()/1000;
      background.filter.uniforms.resolution.value = [window.innerHeight, window.innerWidth];
      sprite.sprite_.height = window.innerHeight;
      sprite.sprite_.width = window.innerWidth;
    }
  }
}

