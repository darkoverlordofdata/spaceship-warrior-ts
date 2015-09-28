module example.systems {


  import HashMap = artemis.utils.HashMap;

  import Position = example.components.Position;
  import Sprite = example.components.Sprite;
  import Constants = example.core.Constants;

  import ComponentMapper = artemis.ComponentMapper;
  import VoidEntitySystem = artemis.systems.VoidEntitySystem;
  import Mapper = artemis.annotations.Mapper;

  export class HudRenderSystem extends VoidEntitySystem {
    @Mapper(Position) pm:ComponentMapper<Position>;
    @Mapper(Sprite) sm:ComponentMapper<Sprite>;

    private framesPerSecond:cc.LabelBMFont;
    private activeEntities:cc.LabelBMFont;
    private totalCreated:cc.LabelBMFont;
    private totalDeleted:cc.LabelBMFont;
    private startTime:number=0;
    private frameNumber:number=0;

    private game:CCLayer;

    constructor(game:CCLayer) {
      super();
      this.game = game;
    }


    public initialize() {
      //cc.LabelBMFont
      //
      this.framesPerSecond = new cc.LabelBMFont('FPS: 60', "res/fonts/normal.fnt", 200, cc.TEXT_ALIGNMENT_LEFT);
      this.activeEntities = new cc.LabelBMFont("Active entities: 0", "res/fonts/normal.fnt", 200, cc.TEXT_ALIGNMENT_LEFT);
      this.totalCreated = new cc.LabelBMFont("Total created: 0", "res/fonts/normal.fnt", 200, cc.TEXT_ALIGNMENT_LEFT);
      this.totalDeleted = new cc.LabelBMFont("Total deleted: 0", "res/fonts/normal.fnt", 200, cc.TEXT_ALIGNMENT_LEFT);

      this.framesPerSecond.setAnchorPoint(cc.p(0, 0));
      this.activeEntities.setAnchorPoint(cc.p(0, 0));
      this.totalCreated.setAnchorPoint(cc.p(0, 0));
      this.totalDeleted.setAnchorPoint(cc.p(0, 0));

      this.framesPerSecond.setPosition(cc.p(0, Constants.FRAME_HEIGHT - 20));
      this.activeEntities.setPosition(cc.p(0, Constants.FRAME_HEIGHT - 40));
      this.totalCreated.setPosition(cc.p(0, Constants.FRAME_HEIGHT - 60));
      this.totalDeleted.setPosition(cc.p(0, Constants.FRAME_HEIGHT - 80));

      this.game.addChild(this.framesPerSecond);
      this.game.addChild(this.activeEntities);
      this.game.addChild(this.totalCreated);
      this.game.addChild(this.totalDeleted);
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

      this.framesPerSecond.setString("FPS: " + this.getFramesPerSecond(), false);
      this.activeEntities.setString("Active entities: " + this.world.getEntityManager().getActiveEntityCount(), false);
      this.totalCreated.setString("Total created: " + this.world.getEntityManager().getTotalCreated(), false);
      this.totalDeleted.setString("Total deleted: " + this.world.getEntityManager().getTotalDeleted(), false);

      //this.activeEntities.string = "Active entities: " + this.world.getEntityManager().getActiveEntityCount();
      //this.totalCreated.string = "Total created: " + this.world.getEntityManager().getTotalCreated();
      //this.totalDeleted.string = "Total deleted: " + this.world.getEntityManager().getTotalDeleted();

    }


  }
}
