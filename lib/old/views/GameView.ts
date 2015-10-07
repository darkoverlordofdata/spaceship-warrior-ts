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

  export class GameView extends AbstractView {

    constructor(protected game:Game) {
      super(game, {
        id: 'gameScreen',
        component: 'Window',
        padding: 4,
        position: {x: 0, y: 0},
        width: window.innerWidth,
        height: window.innerHeight,
        layout: [1, 1]
      });
    }

    /**
     * Wire up the events
     */
    protected initialize() {
      this.view.addChild(this.game.sprites);
    }


  }
}