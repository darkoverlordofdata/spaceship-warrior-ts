module example.core {

  import Container = PIXI.Container;
  import Sprite = PIXI.Sprite;
  import SystemRenderer = PIXI.SystemRenderer;
  import GameScreen = example.core.GameScreen;
  import Constants = example.core.Constants;
  import StarField = example.core.StarField;
  import EntitySystem = artemis.EntitySystem;

  export class SpaceshipWarrior {

    public sprites:Container;
    public renderer:SystemRenderer;
    public gameScreen:GameScreen;
    private delta:number=0;
    private previousTime:number=0;

    /**
     * Load assets and start
     */
    public static main() {
      for (var asset in Constants.assets) {
        PIXI.loader.add(Constants.assets[asset]);
      }
      PIXI.loader.load((loader, resources) => new SpaceshipWarrior(resources));
    }

    /**
     * Create the game instance
     * @param resources
     */
    constructor(resources) {

      /** save the resources on the blackboard */
      EntitySystem.blackBoard.setEntry('resources', resources);

      this.sprites = new Container();
      this.renderer = PIXI.autoDetectRenderer(Constants.FRAME_WIDTH, Constants.FRAME_HEIGHT, {backgroundColor:0x000000});
      EntitySystem.blackBoard.setEntry('webgl', this.renderer.type === PIXI.RENDERER_TYPE.WEBGL);
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

