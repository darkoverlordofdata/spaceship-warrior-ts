module example.systems {

  import HashMap = artemis.utils.HashMap;

  import Position = example.components.Position;
  import Sprite = example.components.Sprite;
  import Constants = example.core.Constants;
  import Layer = example.components.Layer;

  import EntitySystem = artemis.EntitySystem;
  import ComponentMapper = artemis.ComponentMapper;
  import VoidEntitySystem = artemis.systems.VoidEntitySystem;
  import Mapper = artemis.annotations.Mapper;

  import Text = PIXI.Text;
  import Container = PIXI.Container;
  import Point = PIXI.Point;

  export class HudRenderSystem extends VoidEntitySystem {
    @Mapper(Position) pm:ComponentMapper<Position>;
    @Mapper(Sprite) sm:ComponentMapper<Sprite>;

    private framesPerSecond:Text;
    private activeEntities:Text;
    private totalCreated:Text;
    private totalDeleted:Text;
    private startTime:number=0;
    private frameNumber:number=0;

    constructor() {
      super();
    }

    public initialize() {
      //Orbitron
      var font = {font: 'bold 20px Audiowide', align: 'left', fill: 'white'};

      this.framesPerSecond = new Text('FPS: 60', font);
      this.activeEntities = new Text('Active entities: ', font);
      this.totalCreated = new Text('Total created: ', font);
      this.totalDeleted = new Text('Total deleted: ', font);


      this.framesPerSecond['layer'] = Layer.TEXT;
      this.activeEntities['layer'] = Layer.TEXT;
      this.totalCreated['layer'] = Layer.TEXT;
      this.totalDeleted['layer'] = Layer.TEXT;

      var scale = 1 / window.devicePixelRatio;
      this.framesPerSecond.scale = new Point(scale, scale);
      this.activeEntities.scale = new Point(scale, scale);
      this.totalCreated.scale = new Point(scale, scale);
      this.totalDeleted.scale = new Point(scale, scale);

      this.framesPerSecond.position = new Point(0, 20/ window.devicePixelRatio);
      this.activeEntities.position = new Point(0, 40/ window.devicePixelRatio);
      this.totalCreated.position = new Point(0, 60/ window.devicePixelRatio);
      this.totalDeleted.position = new Point(0, 80/ window.devicePixelRatio);

      var sprites:Container = EntitySystem.blackBoard.getEntry<Container>('sprites');
      sprites.addChild(this.framesPerSecond);
      sprites.addChild(this.activeEntities);
      sprites.addChild(this.totalCreated);
      sprites.addChild(this.totalDeleted);
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
