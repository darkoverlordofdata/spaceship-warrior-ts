module example.systems {

  import MathUtils = artemis.utils.MathUtils;
  import Sprite = example.components.Sprite;
  import Layer = example.components.Layer;
  import Constants = example.core.Constants;
  import Container = PIXI.Container;

  import VoidEntitySystem = artemis.systems.VoidEntitySystem;

  import Timer = artemis.utils.Timer;

  export class EntitySpawningTimerSystem extends VoidEntitySystem {

    private timer1:Timer;
    private timer2:Timer;
    private timer3:Timer;
    private timer4:Timer;
    private ai:number=0;
    private mine:number=0;
    private offset:number=0;
    private pos:number[][] = [
      [20, 20],
      [50, 20],
      [80, 20]
    ];

    constructor() {
      super();

      this.initializeAi();

      this.timer1 = new Timer(2, true);

      this.timer1.execute = () => {
        this.world.createEntityFromTemplate('enemy', "enemy1", Layer.ACTORS_3, 10, MathUtils.nextInt(Constants.FRAME_WIDTH), Constants.FRAME_HEIGHT / 2 - 200, 0, -40, 20).addToWorld();
      };

      this.timer2 = new Timer(6, true);

      this.timer2.execute = () => {
        var x = MathUtils.nextInt(Constants.FRAME_WIDTH);
        var y = Constants.FRAME_HEIGHT / 2 - 100;
        this.world.createEntityFromTemplate('enemy', "enemy2", Layer.ACTORS_2, 20, x, y, 0, -30, 40).addToWorld();

      };

      this.timer3 = new Timer(12, true);

      this.timer3.execute = () => {
        var x = MathUtils.nextInt(Constants.FRAME_WIDTH);
        var y = Constants.FRAME_HEIGHT / 2 - 50;
        this.world.createEntityFromTemplate('enemy', "enemy3", Layer.ACTORS_1, 60, x, y, 0, -20, 70).addToWorld();
      };
    }

    /**
     * Mine AI
     */
    public initializeAi() {
      this.timer4 = new Timer(.85/(window.innerWidth/640), true);
      this.timer4.execute = () => {
        this.ai = (this.ai+1)%3;
        this.mine = (this.mine+1)%2;
        var m = this.mine+1;

        this.offset+=100;
        if (this.offset>window.innerWidth) this.offset = 0;

        var v = -MathUtils.nextInt(50)-50;
        var x = this.offset+this.pos[this.ai][0];
        var y = this.pos[this.ai][1];
        this.world.createEntityFromTemplate('mine', `mine${m}`, m*10, x, y, 0, v, 10).addToWorld();

      };
    }


    protected processSystem() {

      var rnd = Math.random();
      if (rnd<.5) rnd = 1-rnd;
      var delta = rnd*this.world.delta;
      this.timer1.update(delta);
      this.timer2.update(delta);
      this.timer3.update(delta);
      this.timer4.update(delta);
    }

  }
}

