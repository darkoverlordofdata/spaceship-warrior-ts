module example.systems {

  import HashMap = artemis.utils.HashMap;

  import Position = example.components.Position;
  import Sprite = example.components.Sprite;
  import Constants = example.core.Constants;

  import ComponentMapper = artemis.ComponentMapper;
  import VoidEntitySystem = artemis.systems.VoidEntitySystem;
  import Mapper = artemis.annotations.Mapper;

  import BitmapText = PIXI.extras.BitmapText;
  import Container = PIXI.Container;
  import Point = PIXI.Point;

  export class HudRenderSystem extends VoidEntitySystem {
    @Mapper(Position) pm:ComponentMapper<Position>;
    @Mapper(Sprite) sm:ComponentMapper<Sprite>;

    private framesPerSecond:BitmapText;
    private activeEntities:BitmapText;
    private totalCreated:BitmapText;
    private totalDeleted:BitmapText;
    private startTime:number=0;
    private frameNumber:number=0;

    constructor(private sprites:Container) {
      super();
    }

    public initialize() {
      var font = {font: '20px Radio Stars', align: 'left'};

      this.framesPerSecond = new BitmapText('FPS: 60', font);
      this.activeEntities = new BitmapText('Active entities: ', font);
      this.totalCreated = new BitmapText('Total created: ', font);
      this.totalDeleted = new BitmapText('Total deleted: ', font);

      var scale = 1/window.devicePixelRatio;
      this.framesPerSecond.scale = new Point(scale, scale);
      this.activeEntities.scale = new Point(scale, scale);
      this.totalCreated.scale = new Point(scale, scale);
      this.totalDeleted.scale = new Point(scale, scale);

      this.framesPerSecond.position = new Point(0, 20);
      this.activeEntities.position = new Point(0, 40);
      this.totalCreated.position = new Point(0, 60);
      this.totalDeleted.position = new Point(0, 80);

      this.sprites.addChild(this.framesPerSecond);
      this.sprites.addChild(this.activeEntities);
      this.sprites.addChild(this.totalCreated);
      this.sprites.addChild(this.totalDeleted);
    }

    private getFramesPerSecond() {
      var time = performance.now();
      var delta = (time - this.startTime) / 1000;
      var result = ~~(++this.frameNumber / delta);

      if (delta > 1) {
        this.startTime = time;
        this.frameNumber = 0;
      }
      return result;
    }

    public processSystem() {
      this.framesPerSecond.text = 'FPS: ' + this.getFramesPerSecond();
      this.activeEntities.text = 'Active entities: ' + this.world.getEntityManager().getActiveEntityCount();
      this.totalCreated.text = 'Total created: ' + this.world.getEntityManager().getTotalCreated();
      this.totalDeleted.text = 'Total deleted: ' + this.world.getEntityManager().getTotalDeleted();
    }
  }
}
