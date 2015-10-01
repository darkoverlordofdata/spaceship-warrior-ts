/**
 * Display player status
 */
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
    private totalScore:BitmapText;

    private totalFrames:number=0;
    private elapsedTime:number=0;
    private fps:number=0;
    private isMobile:boolean;
    private lives:number;
    private score;

    constructor() {
      super();
    }

    public initialize() {
      this.isMobile = false;
      this.score = EntitySystem.blackBoard.getEntry('score');

      var sprites:Container = EntitySystem.blackBoard.getEntry<Container>('sprites');
      var font = example.core.font;

      this.framesPerSecond = new BitmapText('FPS: 60', font);
      this.framesPerSecond['layer'] = Layer.TEXT;
      var scale = 1 / Constants.RATIO;
      this.framesPerSecond.scale = new Point(scale, scale);
      this.framesPerSecond.position = new Point(0, 20 / Constants.RATIO);
      sprites.addChild(this.framesPerSecond);

      this.totalScore = new BitmapText('Score: 0', font);
      this.totalScore['layer'] = Layer.TEXT;
      var scale = 1 / Constants.RATIO;
      this.totalScore.scale = new Point(scale, scale);
      this.totalScore.position = new Point(Constants.FRAME_WIDTH/2, 20 / Constants.RATIO);
      sprites.addChild(this.totalScore);


      if (!this.isMobile) {
        this.activeEntities = new BitmapText('Active entities: ', font);
        this.totalCreated = new BitmapText('Total created: ', font);
        this.totalDeleted = new BitmapText('Total deleted: ', font);

        this.activeEntities['layer'] = Layer.TEXT;
        this.totalCreated['layer'] = Layer.TEXT;
        this.totalDeleted['layer'] = Layer.TEXT;

        this.activeEntities.scale = new Point(scale, scale);
        this.totalCreated.scale = new Point(scale, scale);
        this.totalDeleted.scale = new Point(scale, scale);

        this.activeEntities.position = new Point(0, 40 / Constants.RATIO);
        this.totalCreated.position = new Point(0, 60 / Constants.RATIO);
        this.totalDeleted.position = new Point(0, 80 / Constants.RATIO);

        sprites.addChild(this.activeEntities);
        sprites.addChild(this.totalCreated);
        sprites.addChild(this.totalDeleted);
      }
    }

    public processSystem() {
      this.totalFrames++;
      this.elapsedTime += this.world.delta;
      if (this.elapsedTime > 1) {
        this.fps = this.totalFrames;
        this.totalFrames = 0;
        this.elapsedTime = 0;
      }

      this.framesPerSecond.text = `FPS: ${this.fps}`;
      this.totalScore.text = `Score: ${this.score.score}`;
      if (!this.isMobile) {
        this.activeEntities.text = `Active entities: ${this.world.getEntityManager().getActiveEntityCount()}`;
        this.totalCreated.text = `Total created: ${this.world.getEntityManager().getTotalCreated()}`;
        this.totalDeleted.text = `Total deleted: ${this.world.getEntityManager().getTotalDeleted()}`;
      }

    }
  }
}
