/**
 * views/OptionsView.ts
 *
 * Set preferences, view scores
 *
 */
module example.views {

  const color = '#c0c0c0';
  const font = {
    size: '12px',
    family: 'Skranji',
    color: 'white'

  };

  import Container = PIXI.Container;
  import Fonts = example.views.Fonts;
  import Game = example.core.Game;
  import Constants = example.core.Constants;
  import EntitySystem = artemis.EntitySystem;
  import Properties = example.core.Properties;
  import AbstractView = example.views.AbstractView;

  export class LeaderboardView extends AbstractView {
    public back:EZGUI.Component.Button;
    protected next;
    constructor(protected parent:MenuView) {
      super({
        id: 'scoreScreen',
        component: 'Window',
        padding: 4,
        color: '#bcd8fe',
        position: {x: 0, y: 0},
        //header: { position: { x: 20, y: 20 }, height: 120, width: 360, image:'res/images/Logo.png', },
        width: window.innerWidth,
        height: window.innerHeight,
        layout: [1,1],
        children: [
          {
            id: 'buttonLeaderboardBack',
            text: 'BACK',
            component: 'Button',
            position: {x: (window.innerWidth-200)/2, y: window.innerHeight*.85},
            color: color,
            font: {
              size: '24px',
              family: 'Skranji',
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

      this.view['layer'] = -1;
      var c:Container = EntitySystem.blackBoard.getEntry<Container>('sprites'));
      c.addChild(this.view);


    }

    private backOnClick = (e) => {
      this.hide(this.next);
      this.parent.system.hideLeaderboard();
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
