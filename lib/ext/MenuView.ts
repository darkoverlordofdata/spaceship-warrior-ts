/**
 * views/MenuView.ts
 *
 * Main application menu
 *
 */
module example.views {

  import Fonts = example.views.Fonts;
  import Game = example.core.Game;
  import Constants = example.core.Constants;
  //import GameSystems = example.core.GameSystems;
  import MathUtils = artemis.utils.MathUtils;
  import AbstractView = example.views.AbstractView;

  export class MenuView extends AbstractView {

    constructor(protected game:Game) {
      super(game, {
        id: 'mainScreen',
        component: 'Window',
        padding: 4,
        color: '#bcd8fe',
        position: {x: 0, y: 0},
        //header: { position: { x: 20, y: 20 }, height: 120, width: 360, image:'res/images/Logo.png', },
        width: window.innerWidth,
        height: window.innerHeight,
        layout: [1, 7],
        children: [
          {
            id: 'labelTitle',
            component: 'label',
            position: {x: -1000, y: -1000},
            height: 120,
            width: 360,
            image: 'res/images/Logo.png'
          },
          {
            id: 'buttonPlay',
            text: 'PLAY',
            component: 'Button',
            position: {x: -1000, y: -1000},
            color: '#29d87e',
            font: {
              size: '24px',
              family: 'BDCartoon',
              color: 'white'
            },
            anchor: {x: 0.5, y: 0.5},
            width: 200,
            height: 50
          },
          {
            id: 'buttonHighScore',
            text: 'HIGHSCORE',
            component: 'Button',
            //position: 'center',
            position: {x: -1000, y: -1000},
            color: '#29d87e',
            font: {
              size: '24px',
              family: 'BDCartoon',
              color: 'white'
            },
            anchor: {x: 0.5, y: 0.5},
            width: 200,
            height: 50
          },
          {
            id: 'buttonCredits',
            text: 'CREDITS',
            component: 'Button',
            position: {x: -1000, y: -1000},
            //position: 'center',
            color: '#29d87e',
            font: {
              size: '24px',
              family: 'BDCartoon',
              color: 'white'
            },
            anchor: {x: 0.5, y: 0.5},
            width: 200,
            height: 50
          }


        ]
      });
    }

    public title:EZGUI.Component.Label;
    public play:EZGUI.Component.Button;
    public highScore:EZGUI.Component.Button;
    public credits:EZGUI.Component.Button;
    public leader:Leaderboard;
    public help:Credits;

    /**
     * Wire up the events
     */
    protected initialize() {

      this.title = EZGUI.components.labelTitle;
      this.play = EZGUI.components.buttonPlay;
      this.highScore = EZGUI.components.buttonHighScore;
      this.credits = EZGUI.components.buttonCredits;

      this.play.on('click', (e) => this.playOnClick(e));
      this.highScore.on('click', (e) => this.highScoreOnClick(e));
      this.credits.on('click', (e) => this.creditsOnClick(e));

    }

    public hide = (next?) => {
      this.title.animatePosTo(this.title.position.x, -20 - this.title.settings.height, 500, EZGUI.Easing.Back.Out, () => {
        this.title.visible = false;

        this.play.animatePosTo(this.play.position.x,  -20 - this.play.settings.height, 200, EZGUI.Easing.Circular.Out, () => {
          this.play.visible = false;

          this.highScore.animatePosTo(this.highScore.position.x,  -20 - this.highScore.settings.height, 200, EZGUI.Easing.Circular.Out, () => {
            this.highScore.visible = false;

            this.credits.animatePosTo(this.highScore.position.x,  -20 - this.credits.settings.height, 200, EZGUI.Easing.Circular.Out, () => {
              if (next) next();
            });
          });
        });
      });
    }

    public show = (next?) => {

      this.title.visible = true;
      this.title.position.x = ((window.innerWidth - this.title.settings.width) / 2);
      this.title.position.y = -20 - this.title.settings.height;
      this.title.animatePosTo(this.title.position.x, 20, 500, EZGUI.Easing.Back.Out, () => {

        this.play.visible = true;
        this.play.position.x = ((window.innerWidth - this.play.settings.width) / 2) + 100;
        this.play.position.y = -20 - this.play.settings.height;
        var targetY = ((window.innerHeight - this.play.settings.height) / 2) - 40;
        this.play.animatePosTo(this.play.position.x, targetY, 200, EZGUI.Easing.Circular.Out, () => {

          this.highScore.visible = true;
          this.highScore.position.x = ((window.innerWidth - this.highScore.settings.width) / 2) + 100;
          this.highScore.position.y = -20 - this.highScore.settings.height;
          var targetY = ((window.innerHeight - this.highScore.settings.height) / 2) + 28;
          this.highScore.animatePosTo(this.highScore.position.x, targetY, 200, EZGUI.Easing.Circular.Out, () => {

            this.credits.visible = true;
            this.credits.position.x = ((window.innerWidth - this.credits.settings.width) / 2) + 100;
            this.credits.position.y = -20 - this.credits.settings.height;
            var targetY = ((window.innerHeight - this.credits.settings.height) / 2) + 28 + 66;
            this.credits.animatePosTo(this.credits.position.x, targetY, 200, EZGUI.Easing.Circular.Out, () => {
              if (next) next();
            });
          });
        });
      });
    }

    private playOnClick = (e) => {
      this.hide(() => {
        this.show();
      });
    };

    private highScoreOnClick = (e) => {
      this.hide(() => {
        if (!this.leader) this.leader = new Leaderboard(this.game, this);
        this.leader.show(this.show);
      });
    };

    private creditsOnClick = (e) => {
      this.hide(() => {
        if (!this.help) this.help = new Credits(this.game, this);
        this.help.show(this.show);
      });
    };
  }

  class Leaderboard extends AbstractView {
    public back:EZGUI.Component.Button;
    protected next;
    constructor(protected game:Game, protected parent:MenuView) {
      super(game, {
        id: 'scoreScreen',
        component: 'Window',
        padding: 4,
        color: '#bcd8fe',
        position: {x: 0, y: 0},
        //header: { position: { x: 20, y: 20 }, height: 120, width: 360, image:'res/images/Logo.png', },
        width: window.innerWidth,
        height: window.innerHeight,
        layout: [1, 1],
        children: [
          {
            id: 'buttonLeaderboardBack',
            text: 'BACK',
            component: 'Button',
            position: {x: (window.innerWidth-200)/2, y: window.innerHeight/2},
            color: '#29d87e',
            font: {
              size: '24px',
              family: 'BDCartoon',
              color: 'white'
            },
            anchor: {x: 0.5, y: 0.5},
            width: 200,
            height: 50
          }
        ]
      });
    }

    protected initialize() {
      this.back = EZGUI.components.buttonLeaderboardBack;
      this.back.on('click', (e) => this.backOnClick(e));
    }

    private backOnClick = (e) => {
      this.hide(this.next);
    };

    show = (next?) => {
      this.next = next;
      this._view.visible = true;
    };

    hide = (next?) => {
      this._view.visible = false;
      next();
    };
  }

  class Credits extends AbstractView {
    public back:EZGUI.Component.Button;
    protected next;
    constructor(protected game:Game, protected parent:MenuView) {
      super(game, {
        id: 'creditsScreen',
        component: 'Window',
        padding: 4,
        color: '#bcd8fe',
        position: {x: 0, y: 0},
        //header: { position: { x: 20, y: 20 }, height: 120, width: 360, image:'res/images/Logo.png', },
        width: window.innerWidth,
        height: window.innerHeight,
        layout: [1, 1],
        children: [
          {
            id: 'buttonCreditsBack',
            text: 'BACK',
            component: 'Button',
            position: {x: (window.innerWidth-200)/2, y: window.innerHeight/2},
            color: '#29d87e',
            font: {
              size: '24px',
              family: 'BDCartoon',
              color: 'white'
            },
            anchor: {x: 0.5, y: 0.5},
            width: 200,
            height: 50
          }
        ]
      });
    }

    protected initialize() {
      this.back = EZGUI.components.buttonCreditsBack;
      this.back.on('click', (e) => this.backOnClick(e));
    }

    private backOnClick = (e) => {
      this.hide(this.next);
    };

    show = (next?) => {
      this.next = next;
      this._view.visible = true;
    };

    hide = (next?) => {
      this._view.visible = false;
      next();
    };

  }
}