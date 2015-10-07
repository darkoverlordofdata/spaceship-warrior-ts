/**
 * views/OptionsView.ts
 *
 * Set preferences, view scores
 *
 */
module example.views {

  declare var chrome;

  import Fonts = example.views.Fonts;
  import Game = example.core.Game;
  import Constants = example.core.Constants;
  import EntitySystem = artemis.EntitySystem;
  import GameSystems = example.core.GameSystems;
  import Properties = example.core.Properties;
  import AbstractView = example.views.AbstractView;

  export class OptionsView extends AbstractView {

    constructor(protected game:Game) {
      super(game, {
        id: 'gameOver',
        color: '#e0e0e0',
        component: 'Window',
        padding: 4,
        position: {x: 0, y: 0},
        width: window.innerWidth,
        height: window.innerHeight,
        layout: [3, 8],
        children: [
          null, {
            id: 'optionsView_label1',
            text: 'High Scores',
            font: Fonts.font45,
            component: 'Label',
            position: 'center',
            width: window.innerWidth,
            height: 80
          }, null,

          null, {
            id: 'optionsView_score',
            text: '',
            font: Fonts.font45,
            component: 'Label',
            position: 'center',
            width: window.innerWidth,
            height: 80
          }, null,

          {id: 'optionsView_row1',    font: Fonts.font20, component: 'Label', position: 'left', width: 100, height: 100},
          {id: 'optionsView_date1',   font: Fonts.font20, component: 'Label', position: '', width: 100, height: 100},
          {id: 'optionsView_score1',  font: Fonts.font20, component: 'Label', position: 'right', width: 100, height: 100},

          {id: 'optionsView_row2',    font: Fonts.font20, component: 'Label', position: 'left', width: 100, height: 100},
          {id: 'optionsView_date2',   font: Fonts.font20, component: 'Label', position: '', width: 100, height: 100},
          {id: 'optionsView_score2',  font: Fonts.font20, component: 'Label', position: 'right', width: 100, height: 100},

          {id: 'optionsView_row3',    font: Fonts.font20, component: 'Label', position: 'left', width: 100, height: 100},
          {id: 'optionsView_date3',   font: Fonts.font20, component: 'Label', position: '', width: 100, height: 100},
          {id: 'optionsView_score3',  font: Fonts.font20, component: 'Label', position: 'right', width: 100, height: 100},

          {id: 'optionsView_row4',    font: Fonts.font20, component: 'Label', position: 'left', width: 100, height: 100},
          {id: 'optionsView_date4',   font: Fonts.font20, component: 'Label', position: '', width: 100, height: 100},
          {id: 'optionsView_score4',  font: Fonts.font20, component: 'Label', position: 'right', width: 100, height: 100},

          {id: 'optionsView_music',   font: Fonts.font20, component: 'Checkbox', text: ' Music', position: 'left', width: 40, height: 40},
          {id: 'optionsView_sfx',     font: Fonts.font20, component: 'Checkbox', text: ' Sound FX', position: 'right', width: 40, height: 40},
          null,

          null, {
            id: 'optionsView_play',
            text: 'Play',
            component: 'Button',
            position: 'center',
            font: Fonts.font32,
            width: window.innerWidth,
            height: 80
          }, null
        ]
      });
    }

    /**
     * Load data, Wire up the events
     */
    protected initialize() {
      var playSfx = Properties.get('playSfx') === 'true';
      EntitySystem.blackBoard.setEntry('playSfx', playSfx);

      var playMusic = Properties.get('playMusic') === 'true';
      EntitySystem.blackBoard.setEntry('playMusic', playMusic);

      EZGUI.components.optionsView_sfx.checked = playSfx;
      EZGUI.components.optionsView_music.checked = playMusic;

      EZGUI.components.optionsView_sfx.on('click', (e) => this.sfxOnClick(e));
      EZGUI.components.optionsView_music.on('click', (e) => this.musicOnClick(e));
      EZGUI.components.optionsView_play.on('click', (e) => this.playOnClick(e));
    }

    /**
     * Show Leaderboard
     */
    showLeaderboard(score?:number) {
      if (score) {
        Properties.setScore(score);
        EZGUI.components.optionsView_score.text = score;
      }

      var data = Properties.getLeaderboard(3);
      for (var k in data) {
        var row = data[k];
        var i = parseInt(k) + 1;
        var mmddyyyy = row.date.substr(4, 2) + '/' + row.date.substr(6, 2) + '/' + row.date.substr(0, 4);
        EZGUI.components[`optionsView_row${i}`].text = '#' + i;
        EZGUI.components[`optionsView_date${i}`].text = mmddyyyy;
        EZGUI.components[`optionsView_score${i}`].text = row.score;
      }
    }

    /**
     * Sfx OnClick
     * @param e
     */
    private sfxOnClick = (e) => {
      Properties.set('playSfx', e.target.checked);
      EntitySystem.blackBoard.setEntry('playSfx', e.target.checked);
    };

    /**
     * Music OnClick
     * @param e
     */
    private musicOnClick = (e) => {
      Properties.set('playMusic', e.target.checked);
      EntitySystem.blackBoard.setEntry('playMusic', e.target.checked);
    };

    /**
     * Play OnClick
     * @param e
     */
    private playOnClick = (e) => {

      Properties.set('skip', 'true');
      try {
        chrome.runtime.reload();
      } catch (e) {
        window.location.reload(true);
      }
    };



  }
}
