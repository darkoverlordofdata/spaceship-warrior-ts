module example.systems {

  import BitmapText = PIXI.extras.BitmapText;
  import Container = PIXI.Container;
  import Point = PIXI.Point;

  import Bounds = example.components.Bounds;
	import Health = example.components.Health;
	import Position = example.components.Position;
  import Sprite = example.components.Sprite;

	import Aspect = artemis.Aspect;
	import ComponentMapper = artemis.ComponentMapper;
	import Entity = artemis.Entity;
  import EntitySystem = artemis.EntitySystem;
	import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
	import MathUtils = artemis.utils.MathUtils;
	import Mapper = artemis.annotations.Mapper;
  import Constants = example.core.Constants;


  interface IBitmapText {
    [key: string]: BitmapText;
  }
	export class HealthRenderSystem extends EntityProcessingSystem {
		@Mapper(Position) pm:ComponentMapper<Position>;
		@Mapper(Health) hm:ComponentMapper<Health>;
    @Mapper(Bounds) bm:ComponentMapper<Bounds>;
    @Mapper(Sprite) sm:ComponentMapper<Sprite>;

    private texts:IBitmapText = {};
    private sprites:Container;

    constructor() {
			super(Aspect.getAspectForAll(Position, Health));
		}

    public initialize() {
      this.sprites = EntitySystem.blackBoard.getEntry<Container>('sprites');
    }


    public inserted(e:Entity) {
      var sprite:Sprite = this.sm.get(e);
      var text:BitmapText = new BitmapText('100%',  {font: '20px Radio Stars'});
      text['layer'] = sprite.layer+.5;
      var s = 1/window.devicePixelRatio;
      var scale = text.scale;
      scale.x = s;
      scale.y = s;
      this.sprites.addChild(text);
      this.texts[e.uuid] = text;

    }
    protected removed(e:Entity) {
      this.sprites.removeChild(this.texts[e.uuid]);
      this.texts[e.uuid] = null;
      delete this.texts[e.uuid];
    }

		public processEach(e:Entity) {
      // update the text element on the sprite
      if (this.texts[e.uuid]) {
        var position:Position = this.pm.get(e);
        var health:Health = this.hm.get(e);
        var bounds:Bounds = this.bm.get(e);
        var text:BitmapText = this.texts[e.uuid];

        var percentage:number = Math.round(health.health / health.maximumHealth * 100);
        text.position.x = position.x; // = new PIXI.Point(position.x, position.y);
        text.position.y = position.y; // = new PIXI.Point(position.x, position.y);
        text.text = `${percentage}%`;
      }
		}

	}
}
