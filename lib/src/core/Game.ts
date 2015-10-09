/**
 * core/Game.ts
 *
 * Top level application object
 *
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
  import GameSystems = example.core.GameSystems;

  export class Game {

    public stage:Container;
    public sprites:Container;
    public renderer:SystemRenderer;
    public systems:GameSystems;
    private delta:number=0;
    private previousTime:number=0;
    private score = {score: 0};
    //private sfx = {sfx: false};

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
      EntitySystem.blackBoard.setEntry('playSfx', Properties.get('playSfx'));

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
      this.stage.addChild(this.sprites);

      EZGUI.Theme.load([`res/ezgui/${Constants.theme}-theme/${Constants.theme}-theme.json`], () => {

        var auto = Properties.get('skip') === 'true';
        Properties.set('skip', 'false');

        this.systems = new GameSystems(this.renderer.type === PIXI.RENDERER_TYPE.WEBGL);
        requestAnimationFrame(this.update);

      });
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

