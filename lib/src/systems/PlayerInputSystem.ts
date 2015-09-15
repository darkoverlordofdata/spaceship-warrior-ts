module example.systems {

  import Player = example.components.Player;
  import Position = example.components.Position;
  import Velocity = example.components.Velocity;

  import Aspect = artemis.Aspect;
  import ComponentMapper = artemis.ComponentMapper;
  import Entity = artemis.Entity;
  import Mapper = artemis.annotations.Mapper;
  import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
  import Constants = example.core.Constants;

  export class PlayerInputSystem extends EntityProcessingSystem  {
    private static FireRate = 0.1;

    @Mapper(Position) pm:ComponentMapper<Position>;
    @Mapper(Velocity) vm:ComponentMapper<Velocity>;

    private shoot:boolean;
    private timeToFire:number=0;
    private mouseVector;
    private game:PIXI.Container;

    constructor(game:PIXI.Container) {
      super(Aspect.getAspectForAll(Position, Velocity, Player));
      this.game = game;
    }


    public initialize() {

      //var listener = cc.EventListener.create({
      //  event: cc.EventListener.TOUCH_ONE_BY_ONE,
      //  swallowTouches: true,
      //  onTouchBegan: (touch, event) => {
      //    this.shoot = true;
      //    this.mouseVector = touch.getLocation();
      //    return true;
      //  },
      //  onTouchMoved: (touch, event) => {
      //    this.shoot = true;
      //    this.mouseVector = touch.getLocation();
      //    return true;
      //  },
      //  onTouchEnded: (touch, event) => {
      //    this.shoot = false;
      //    this.mouseVector = touch.getLocation();
      //  }
      //});
      //cc.eventManager.addListener(listener, this.game);
      //

    }

    protected processEach(e:Entity) {

      if (this.mouseVector === undefined) return;

      var position:Position = this.pm.get(e);
      var velocity:Velocity = this.vm.get(e);

      var destinationX = this.mouseVector.x;
      var destinationY = this.mouseVector.y;

      if (destinationX === undefined || destinationY === undefined) return;

      position.x = this.mouseVector.x/2;
      position.y = Constants.FRAME_HEIGHT-this.mouseVector.y;


      if (this.shoot) {
        if (this.timeToFire <= 0) {

          this.world.createEntityFromTemplate('bullet', position.x - 27, position.y + 2).addToWorld();
          this.world.createEntityFromTemplate('bullet', position.x + 27, position.y + 2).addToWorld();
          this.timeToFire = PlayerInputSystem.FireRate;
        }
      }
      if (this.timeToFire > 0) {
        this.timeToFire -= this.world.delta;
        if (this.timeToFire < 0) {
          this.timeToFire = 0;
        }
      }
    }


  }
}
