module example.core {

  import Container = PIXI.Container;
  import SystemRenderer = PIXI.SystemRenderer;
  import GameScreen = example.core.GameScreen;
  import Constants = example.core.Constants;

  export class SpaceshipWarrior {

    public static assets = [
      'res/images.json',
      'res/fonts/normal.fnt',
      'res/fonts/hud.fnt',
      'res/sounds/asplode.wav',
      'res/sounds/pew.wav',
      'res/sounds/smallasplode.wav'
    ];

    public sprites:Container;
    public renderer:SystemRenderer;
    public gameScreen:GameScreen;
    private delta:number=0;
    private previousTime:number=0;

    /**
     * Load assets and start
     */
    public static main() {
      for (var asset in SpaceshipWarrior.assets) {
        PIXI.loader.add(SpaceshipWarrior.assets[asset]);
      }
      PIXI.loader.load((loader, resources) => new SpaceshipWarrior(resources));
    }

    /**
     * Create the game instance
     * @param resources
     */
    constructor(resources) {

      this.sprites = new Container();
      this.renderer = PIXI.autoDetectRenderer(Constants.FRAME_WIDTH, Constants.FRAME_HEIGHT, {backgroundColor:0x000000});
      this.renderer.view.style.position = "absolute";
      document.body.appendChild(this.renderer.view);
      window.addEventListener('resize', this.resize, true);
      window.onorientationchange = this.resize;
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
      this.gameScreen.render((time - this.delta) * 0.001);
      this.renderer.render(this.sprites);
      requestAnimationFrame(this.update);
    };

    /**
     * Resize window
     */
    resize = () => {
      var height = window.innerHeight;
      var width = window.innerWidth;
      this.renderer.resize(width, height);
    };

  }
}

