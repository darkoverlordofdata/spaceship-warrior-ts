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
  import Container = PIXI.Container;

  export class PlayerInputSystem extends EntityProcessingSystem  {
    private static FireRate = 0.1;

    @Mapper(Position) pm:ComponentMapper<Position>;
    @Mapper(Velocity) vm:ComponentMapper<Velocity>;

    private shoot:boolean;
    private timeToFire:number=0;
    private mouseVector;

    constructor() {
      super(Aspect.getAspectForAll(Position, Velocity, Player));
    }


    public initialize() {

      document.addEventListener('touchstart', this.onTouchStart, true);
      document.addEventListener('touchmove', this.onTouchMove, true);
      document.addEventListener('touchend', this.onTouchEnd, true);

      document.addEventListener('mousedown', this.onTouchStart, true);
      document.addEventListener('mousemove', this.onTouchMove, true);
      document.addEventListener('mouseup', this.onTouchEnd, true);

    }
    
    private onTouchStart = (event) => {
      event = event.changedTouches ? event.changedTouches[0] : event;

      if (Constants.isMobile) {

      try {
          if (document.documentElement['requestFullscreen']) {
            document.documentElement['requestFullscreen']();
          } else if (document.documentElement['mozRequestFullScreen']) {
            document.documentElement['mozRequestFullScreen']();
          } else if (document.documentElement['webkitRequestFullscreen']) {
            document.documentElement['webkitRequestFullscreen']();
          } else if (document.documentElement['msRequestFullscreen']) {
            document.documentElement['msRequestFullscreen']();
          }
        } catch (e) {}
      }

      this.shoot = true;
      this.mouseVector = {
        x: parseInt(event.clientX),
        y: parseInt(event.clientY)
      };
      return true;
    };

    private onTouchMove = (event) => {
      event = event.changedTouches ? event.changedTouches[0] : event;
      //this.shoot = true;
      this.mouseVector = {
        x: parseInt(event.clientX),
        y: parseInt(event.clientY)
      };
      return true;
    };

    private onTouchEnd = (event) => {
      this.shoot = false;
    };

    protected processEach(e:Entity) {

      if (this.mouseVector === undefined) return;

      var position:Position = this.pm.get(e);
      var velocity:Velocity = this.vm.get(e);

      var destinationX = this.mouseVector.x;
      var destinationY = this.mouseVector.y;

      if (destinationX === undefined || destinationY === undefined) return;

      position.x = this.mouseVector.x;
      position.y = this.mouseVector.y-60;


      if (this.shoot) {
        if (this.timeToFire <= 0) {

          var s = ~~(24/Constants.RATIO);
          this.world.createEntityFromTemplate('bullet', position.x - s, position.y + 2).addToWorld();
          this.world.createEntityFromTemplate('bullet', position.x + s, position.y + 2).addToWorld();
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
