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

    constructor() {
      super();

      this.timer4 = new Timer(1, true);
      this.timer4.execute = () => {
        this.world.createEntityFromTemplate('mine', "mine1", 10, MathUtils.nextInt(Constants.FRAME_WIDTH), MathUtils.nextInt(Constants.FRAME_HEIGHT/4), 0, -MathUtils.nextInt(50)-50, 10).addToWorld();
        this.world.createEntityFromTemplate('mine', "mine2", 20, MathUtils.nextInt(Constants.FRAME_WIDTH), MathUtils.nextInt(Constants.FRAME_HEIGHT/4), 0, -MathUtils.nextInt(60)-60, 10).addToWorld();

      };

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

