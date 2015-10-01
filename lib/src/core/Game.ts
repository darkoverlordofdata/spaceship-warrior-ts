/**
 * Game
 *
 * connects the environment to the ecs
 */
module example.core {

  import Container = PIXI.Container;
  import Sprite = PIXI.Sprite;
  import SystemRenderer = PIXI.SystemRenderer;
  import GameSystems = example.core.GameSystems;
  import Constants = example.core.Constants;
  import EntitySystem = artemis.EntitySystem;
  import ScaleType = example.core.ScaleType;
  import AbstractFilter = PIXI.AbstractFilter;
  import MathUtils = artemis.utils.MathUtils;

  export class Game {

    public stage:Container;
    public sprites:Container;
    public renderer:SystemRenderer;
    public systems:GameSystems;
    private delta:number=0;
    private previousTime:number=0;

    public menuScreen;
    public gameOver;



    /**
     * Load assets and start
     */
    public static main() {
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
      EntitySystem.blackBoard.setEntry('score', {score:0});

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

      var theme = 'd16a'; /** DarkoverlordofdatA */
      EZGUI.Theme.load([`res/ezgui/${theme}-theme/${theme}-theme.json`], () => {

        /** Menu */
        this.menuScreen = EZGUI.create(Constants.guiMenu, theme);

        EZGUI.components.play.on('click', (e) => {
          this.menuScreen.visible = false;
          this.gameOver.visible = false;
          this.sprites.visible = true;
          this.systems = new GameSystems(this.renderer.type === PIXI.RENDERER_TYPE.WEBGL);
        });

        EZGUI.components.options.on('click', () => {
        });

        /** display a random fortune cookie */
        EZGUI.components.slogan.text = Constants.fortune[MathUtils.nextInt(Constants.fortune.length)];

        /** GameOver */
        this.gameOver = EZGUI.create(Constants.guiGameOver, theme);

        EZGUI.components.again.on('click', (e) => {
          this.menuScreen.visible = false;
          this.gameOver.visible = false;
          this.sprites.visible = true;
          this.systems = new GameSystems(this.renderer.type === PIXI.RENDERER_TYPE.WEBGL);
        });


        this.menuScreen.visible = true;
        this.gameOver.visible = false;
        this.sprites.visible = false;
        this.stage.addChild(this.sprites);
        this.stage.addChild(this.menuScreen);
        this.stage.addChild(this.gameOver);

      });

      requestAnimationFrame(this.update);

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

