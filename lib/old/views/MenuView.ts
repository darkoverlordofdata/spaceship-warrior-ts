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
  import GameSystems = example.core.GameSystems;
  import MathUtils = artemis.utils.MathUtils;
  import AbstractView = example.views.AbstractView;
  import EntitySystem = artemis.EntitySystem;
  import AbstractFilter = PIXI.AbstractFilter;

  export class MenuView extends AbstractView {

    constructor(protected game:Game) {
      super(game, {
        id: 'mainScreen',
        color: '#e0e0e0',
        component: 'Window',
        padding: 4,
        position: {x: 0, y: 0},
        width: window.innerWidth,
        height: window.innerHeight,
        layout: [1, 4],
        children: [
          {
            id: 'optionsView_label1',
            text: 'Schmup Warz',
            font: Fonts.font45,
            component: 'Label',
            position: 'center',
            width: window.innerWidth,
            height: 80
          },
          {
            id: 'menuView_play',
            skin:'bluebutton',
            text: 'Play',
            font: Fonts.font20,
            component: 'Button',
            position: 'center',
            width: 200,
            height: 50
          },
          {
            id: 'menuView_options',
            text: 'Options',
            skin:'bluebutton',
            font: Fonts.font20,
            component: 'Button',
            position: 'center',
            width: 200,
            height: 50
          },
          {
            id: 'menuView_slogan',
            text: 'May the schmup be with you',
            component: 'Label',
            position: 'center',
            width: window.innerWidth,
            height: 50,
            font: Fonts.font20
          }
        ]
      });
    }

    /**
     * Wire up the events
     */
    protected initialize() {

      EZGUI.components.menuView_play.on('click', (e) => this.playOnClick(e));
      EZGUI.components.menuView_options.on('click', (e) => this.optionsOnClick(e));
      EZGUI.components.menuView_slogan.text = Constants.fortune[MathUtils.nextInt(Constants.fortune.length)];


    }


    private playOnClick = (e) => {
      this.game.start();
    };

    private optionsOnClick = (e) => {
      this.game.showLeaderboard();
    };
  }
}