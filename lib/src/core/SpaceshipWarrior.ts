module example.core {

  import GameScreen = example.core.GameScreen;
  import Constants = example.core.Constants;
  import Container = PIXI.Container;

  export class SpaceshipWarrior {

    public sprites:Container;
    public renderer;
    public monitor;
    private delta:number;
    private previousTime:number;
    public gameScreen:GameScreen;

    public static main() {
      PIXI.loader
          .add('res/images.json')
          .add('res/fonts/normal.fnt')
          .add('res/fonts/hud.fnt')
          .load(function(loader, resources) {
              new SpaceshipWarrior(resources);
          });
    }

    constructor(resources) {

      this.sprites = new Container();

      this.renderer = PIXI.autoDetectRenderer(Constants.FRAME_WIDTH, Constants.FRAME_HEIGHT, {backgroundColor:0x000000});
      this.renderer.view.style.position = "absolute";
      document.body.appendChild(this.renderer.view);

      window.addEventListener('resize', this.onResize, true);
      window.onorientationchange = this.onResize;

      this.monitor = new window['Stats']();
      this.monitor.setMode(0);
      this.monitor.domElement.style.position = "absolute";
      this.monitor.domElement.style.top = "0px";
      document.body.appendChild(this.monitor.domElement);

      this.delta = 0;
      this.previousTime = 0;
      this.gameScreen = new GameScreen(this.sprites, resources);

      requestAnimationFrame(this.update);
    }

    /**
     * Game Loop
     * @param time
     */
    update = (time:number) => {

      this.delta = this.previousTime || time;
      this.previousTime = time;

      this.monitor.begin();
      this.gameScreen.render((time - this.delta) * 0.001);
      this.renderer.render(this.sprites);
      requestAnimationFrame(this.update);
      this.monitor.end();

    };

    onResize = () => {
      var height = window.innerHeight;
      var width = window.innerWidth;
      this.renderer.resize(width, height);
    };

  }
}

