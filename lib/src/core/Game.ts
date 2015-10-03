/**
 * Game
 *
 * connects the environment to the ecs
 */
module example.core {

  import Container = PIXI.Container;
  import Sprite = PIXI.Sprite;
  import SystemRenderer = PIXI.SystemRenderer;
  import Constants = example.core.Constants;
  import EntitySystem = artemis.EntitySystem;
  import ScaleType = example.core.ScaleType;
  import AbstractFilter = PIXI.AbstractFilter;
  import MathUtils = artemis.utils.MathUtils;
  import Properties = example.core.Properties;
  import MenuView = example.views.MenuView;
  import OptionsView = example.views.OptionsView;

  export class Game {

    public stage:Container;
    public sprites:Container;
    public renderer:SystemRenderer;
    public systems:GameSystems;
    private delta:number=0;
    private previousTime:number=0;
    private score = {score: 0};
    private sfx = {sfx: false};

    public options:OptionsView;
    public menu:MenuView;

    /**
     * Load assets and start
     */
    public static main() {
      Properties.init(Constants.appName, Constants.properties);
      for (var asset in Constants.assets) {
        PIXI.loader.add(asset, Constants.assets[asset]);
      }
      PIXI.loader.load((loader, resources) => new Game(resources));
    }

    /**
     * Create the game instance
     * @param resources
     */
    constructor(resources) {

      this.stage = new Container();
      this.sprites = new Container();
      EntitySystem.blackBoard.setEntry('game', this);
      EntitySystem.blackBoard.setEntry('sprites', this.sprites);
      EntitySystem.blackBoard.setEntry('resources', resources);
      EntitySystem.blackBoard.setEntry('score', this.score);

      var renderer = this.renderer = PIXI.autoDetectRenderer(Constants.FRAME_WIDTH, Constants.FRAME_HEIGHT, {backgroundColor:0x000000});
      switch (Constants.SCALE_TYPE) {
        case ScaleType.FILL:
          this.renderer.view.style.position = 'absolute';
          break;
        case ScaleType.FIXED:
          renderer.view.style.position = 'absolute';
          renderer.view.style.width = window.innerWidth + 'px';
          renderer.view.style.height = window.innerHeight + 'px';
          renderer.view.style.display = 'block';
          break;
      }

      document.body.appendChild(this.renderer.view);
      window.addEventListener('resize', this.resize, true);
      window.onorientationchange = this.resize;

      EZGUI.Theme.load([`res/ezgui/${Constants.theme}-theme/${Constants.theme}-theme.json`], () => {

        this.menu = new MenuView(this);
        this.options = new OptionsView(this);
        requestAnimationFrame(this.update);

      });
    }

    showLeaderboard(score?:number) {
      this.options.showLeaderboard(score);
    }

    /**
     * Start the game
     */
    start() {
      this.systems = new GameSystems(this.renderer.type === PIXI.RENDERER_TYPE.WEBGL);

    }
    /**
     * Game Loop
     * @param time
     */
    update = (time:number) => {
      this.delta = this.previousTime || time;
      this.previousTime = time;
      if (this.systems) this.systems.update((time - this.delta) * 0.001);
      this.renderer.render(this.stage);
      requestAnimationFrame(this.update);
    };

    /**
     * Resize window
     */
    resize = () => {
      switch (Constants.SCALE_TYPE) {
        case ScaleType.FILL:
          var height = window.innerHeight;
          var width = window.innerWidth;
          this.renderer.resize(width, height);
          break;
        case ScaleType.FIXED:
          this.renderer.view.style.width = window.innerWidth + 'px';
          this.renderer.view.style.height = window.innerHeight + 'px';
          break;
      }
    };

  }
}

