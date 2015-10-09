/**
 * Display player status
 */
module example.systems {

  import HashMap = artemis.utils.HashMap;

  import Aspect = artemis.Aspect;
  import Player = example.components.Player;
  import Vital = example.components.Vital;
  import Health = example.components.Health;
  import Position = example.components.Position;
  import Sprite = example.components.Sprite;
  import Constants = example.core.Constants;
  import Layer = example.components.Layer;

  import Entity = artemis.Entity;
  import EntitySystem = artemis.EntitySystem;
  import ComponentMapper = artemis.ComponentMapper;
  import VoidEntitySystem = artemis.systems.VoidEntitySystem;
  import Mapper = artemis.annotations.Mapper;
  import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;

  import BitmapText = PIXI.extras.BitmapText;
  import Container = PIXI.Container;
  import Point = PIXI.Point;

  export class HudRenderSystem extends EntityProcessingSystem {

    @Mapper(Health) hm:ComponentMapper<Health>;
    @Mapper(Vital) vm:ComponentMapper<Vital>;

    private framesPerSecond:BitmapText;
    private activeEntities:BitmapText;
    private totalCreated:BitmapText;
    private totalDeleted:BitmapText;
    private totalScore:BitmapText;

    private totalFrames:number=0;
    private elapsedTime:number=0;
    private fps:number=0;
    private lives:number;
    private score;
    private status:Entity;

    constructor() {
      super(Aspect.getAspectForAll(Player, Health));
    }

    public initialize() {
      this.score = EntitySystem.blackBoard.getEntry('score');

      var sprites:Container = EntitySystem.blackBoard.getEntry<Container>('sprites');
      var font = Constants.font;

      this.framesPerSecond = new BitmapText('FPS: 60', font);
      this.framesPerSecond['layer'] = Layer.TEXT;
      var scale = 1 / Constants.RATIO;
      this.framesPerSecond.scale = new Point(scale, scale);
      this.framesPerSecond.position = new Point(20, 20 / Constants.RATIO);
      sprites.addChild(this.framesPerSecond);

      this.totalScore = new BitmapText('Score: 00000', font);
      this.totalScore['layer'] = Layer.TEXT;
      var scale = 1 / Constants.RATIO;
      this.totalScore.scale = new Point(scale, scale);
      this.totalScore.position = new Point(Constants.FRAME_WIDTH-this.totalScore.width-20, 20 / Constants.RATIO);
      sprites.addChild(this.totalScore);

      if (!Constants.isMobile) {
        this.activeEntities = new BitmapText('Active entities: ', font);
        this.totalCreated = new BitmapText('Total created: ', font);
        this.totalDeleted = new BitmapText('Total deleted: ', font);

        this.activeEntities['layer'] = Layer.TEXT;
        this.totalCreated['layer'] = Layer.TEXT;
        this.totalDeleted['layer'] = Layer.TEXT;

        this.activeEntities.scale = new Point(scale, scale);
        this.totalCreated.scale = new Point(scale, scale);
        this.totalDeleted.scale = new Point(scale, scale);

        this.activeEntities.position = new Point(20, 40 / Constants.RATIO);
        this.totalCreated.position = new Point(20, 60 / Constants.RATIO);
        this.totalDeleted.position = new Point(20, 80 / Constants.RATIO);

        sprites.addChild(this.activeEntities);
        sprites.addChild(this.totalCreated);
        sprites.addChild(this.totalDeleted);
      }
    }

    setStatus(status:Entity) {
      this.status = status;
    }

    public processEach(e:Entity) {

      var world = this.world;
      var health:Health = this.hm.get(e);
      var vital:Vital = this.vm.get(this.status);

      vital.good.width = ~~Math.round(health.health / health.maximumHealth * 100);

      this.totalFrames++;
      this.elapsedTime += world.delta;
      if (this.elapsedTime > 1) {
        this.fps = this.totalFrames;
        this.totalFrames = 0;
        this.elapsedTime = 0;
      }

      this.framesPerSecond.text = `FPS: ${this.fps}`;
      this.totalScore.text = `Score: ${this.score.score}`;
      if (!Constants.isMobile) {
        this.activeEntities.text = `Active entities: ${world.getEntityManager().getActiveEntityCount()}`;
        this.totalCreated.text = `Total created: ${world.getEntityManager().getTotalCreated()}`;
        this.totalDeleted.text = `Total deleted: ${world.getEntityManager().getTotalDeleted()}`;
      }

    }
  }
}
