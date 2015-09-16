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

    private activeEntities:BitmapText;
    private totalCreated:BitmapText;
    private totalDeleted:BitmapText;

    private sprites:Container;

    constructor(sprites:Container) {
      super();
      this.sprites = sprites;
    }


    public initialize() {
      var font = {font: '14px Radio Stars', align: 'left'};

      this.activeEntities = new BitmapText('Active entities: ', font);
      this.totalCreated = new BitmapText('Total created: ', font);
      this.totalDeleted = new BitmapText('Total deleted: ', font);

      this.activeEntities.position = new Point(0, 60);
      this.totalCreated.position = new Point(0, 80);
      this.totalDeleted.position = new Point(0, 100);

      this.sprites.addChild(this.activeEntities);
      this.sprites.addChild(this.totalCreated);
      this.sprites.addChild(this.totalDeleted);
    }


    public processSystem() {

      this.activeEntities.text = 'Active entities: ' + this.world.getEntityManager().getActiveEntityCount();
      this.totalCreated.text = 'Total created: ' + this.world.getEntityManager().getTotalCreated();
      this.totalDeleted.text = 'Total deleted: ' + this.world.getEntityManager().getTotalDeleted();
    }
  }
}
