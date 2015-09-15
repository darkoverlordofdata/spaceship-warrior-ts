module example.systems {

  import Bounds = example.components.Bounds;
	import Health = example.components.Health;
	import Position = example.components.Position;
  import Sprite = example.components.Sprite;

	import Aspect = artemis.Aspect;
	import ComponentMapper = artemis.ComponentMapper;
	import Entity = artemis.Entity;
	import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
	import MathUtils = artemis.utils.MathUtils;
	import Mapper = artemis.annotations.Mapper;
  import Constants = example.core.Constants;

  import BitmapText = PIXI.extras.BitmapText;

  interface IBitmapText {
    [key: string]: BitmapText;
  }
	export class HealthRenderSystem extends EntityProcessingSystem {
		@Mapper(Position) pm:ComponentMapper<Position>;
		@Mapper(Health) hm:ComponentMapper<Health>;
    @Mapper(Bounds) bm:ComponentMapper<Bounds>;

    private texts:IBitmapText;
    private game:PIXI.Container;

    constructor(game:PIXI.Container) {
			super(Aspect.getAspectForAll(Position, Health));
      this.game = game;
      this.texts = {};
		}
		
    public inserted(e:Entity) {
      var b:BitmapText = new BitmapText('100%',  {font: '10px Radio Stars'});
      this.game.addChild(b);
      this.texts[e.uuid] = b;

    }
    protected removed(e:Entity) {
      this.game.removeChild(this.texts[e.uuid]);
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
        text.position = new PIXI.Point(position.x*2+(bounds.radius/2), position.y+(bounds.radius/2));
        text.text = `${percentage}%`;
      }
		}

	}
}
