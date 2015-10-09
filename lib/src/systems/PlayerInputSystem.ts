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

  class KeyPoll {

    public states = {};
    isDown = (keyCode) => this.states[keyCode];
    isUp = (keyCode) => !this.states[keyCode];

    constructor() {

      window.addEventListener('keydown', (event) => {
        this.states[event.keyCode] = true;
      });

      window.addEventListener('keyup',(event) => {
        if (this.states[event.keyCode]) this.states[event.keyCode] = false;
      });
    }

  }
  export class PlayerInputSystem extends EntityProcessingSystem  {
    private static FireRate = 0.1;

    @Mapper(Position) pm:ComponentMapper<Position>;
    @Mapper(Velocity) vm:ComponentMapper<Velocity>;

    private shoot:boolean;
    private timeToFire:number=0;
    private mouseVector;
    private kbd:KeyPoll;

    constructor() {
      super(Aspect.getAspectForAll(Position, Velocity, Player));
    }


    public initialize() {

      this.kbd = new KeyPoll();

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
      var mouseVector = this.mouseVector;
      var world = this.world;

      var position:Position = this.pm.get(e);

      var destinationX = mouseVector.x;
      var destinationY = mouseVector.y;

      if (destinationX === undefined || destinationY === undefined) return;

      position.x = mouseVector.x;
      position.y = mouseVector.y-60;


      if (this.shoot || this.kbd.isDown(' '.charCodeAt(0))) {
        if (this.timeToFire <= 0) {

          var s = ~~(24/Constants.RATIO);
          world.createEntityFromTemplate('bullet', position.x - s, position.y + 2).addToWorld();
          world.createEntityFromTemplate('bullet', position.x + s, position.y + 2).addToWorld();
          this.timeToFire = PlayerInputSystem.FireRate;
        }
      }
      if (this.timeToFire > 0) {
        this.timeToFire -= world.delta;
        if (this.timeToFire < 0) {
          this.timeToFire = 0;
        }
      }
    }
  }
}
