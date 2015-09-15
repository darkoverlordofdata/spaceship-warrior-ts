module example.core {

  import GameScreen = example.core.GameScreen;
  import Constants = example.core.Constants;

  export class SpaceshipWarrior extends PIXI.Container {

    constructor(resources) {
      super();


      var renderer = PIXI.autoDetectRenderer(Constants.FRAME_WIDTH, Constants.FRAME_HEIGHT, {backgroundColor:0x000000});
      renderer.view.style.position = "absolute";
      document.body.appendChild(renderer.view);

      var onResize = () => {
        var height = window.innerHeight;
        var width = window.innerWidth;
        renderer.resize(width, height);
      };
      window.addEventListener('resize', onResize, true);
      window.onorientationchange = onResize;



      var monitor = new window['Stats']();
      monitor.setMode(0);
      monitor.domElement.style.position = "absolute";
      monitor.domElement.style.top = "0px";
      document.body.appendChild(monitor.domElement);

      var delta = 0;
      var previousTime = 0;
      var gameScreen = new GameScreen(this, resources);

      /**
       * Game Loop
       * @param time
       */
      var update = (time:number) => {

        delta = previousTime || time;
        previousTime = time;

        monitor.begin();
        gameScreen.render((time - delta) * 0.001);
        renderer.render(this);
        requestAnimationFrame(update);
        monitor.end();

      };
      requestAnimationFrame(update);
    }

  }
}

