/**
 * Constants
 */
module example.core {

  export var font = {font: '20px Radio Stars', align: 'left'};

  /**
   * GroupManager Groups
   */
  export enum Groups {
    PLAYER_BULLETS,
    PLAYER_SHIP,
    PLAYER_LIVES,
    ENEMY_SHIPS,
    ENEMY_BULLETS,
    ENEMY_MINES
  }

  export enum ScaleType {
    FILL, // fill to fit screen
    FIXED // scale fixed size to fit the screen
  }
  export class Constants {

    public static FRAME_WIDTH:number = window.innerWidth;
    public static FRAME_HEIGHT:number = window.innerHeight;
    public static RATIO = window.devicePixelRatio * .6;

    public static SCALE_TYPE:ScaleType = ScaleType.FILL;

    public static assets = {

      images_json         : 'res/images.json',
      normal_fnt          : 'res/fonts/normal.fnt',
      hud_fnt             : 'res/fonts/hud.fnt',
      asplode_ogg         : 'res/sounds/asplode.ogg',
      pew_ogg             : 'res/sounds/pew.ogg',
      smallasplode_ogg    : 'res/sounds/smallasplode.ogg',
      parallaxStars_frag  : 'res/glsl/parallaxStars.frag'

    };

    public static fortune = [
      'Give me those Schmup Wars',
      "I <3 URANUS",
      'May the Schmup be with you',
      "So, at last we meet for the \nfirst time for the last time",
      "I am your father's brother's \nnephew's cousin's ex \nwife's lawyer's father's",
      'The schmup is strong in this one',
      "Prepare for ludicrous speed!",
      'Schmup is the path to the\n dark side',
      "There goes the planet."
    ];

    public static guiGameOver = {
      id: 'gameOver',
      component: 'Window',
      padding: 4,
      position: { x: 0, y: 0 },
      width: window.innerWidth,
      height: window.innerHeight,

      layout: [1, 4],
      children: [
        {
          id: 'label1',
          text: 'Game Over',
          font: {
            size: '45px',
            fontWeight: 'bold',
            family: 'OpenDyslexic',
            color: '8f8'
          },
          component: 'Label',
          position: 'center',
          width: window.innerWidth,
          height: 80
        },
        {
          id: 'again',
          text: 'Play',
          component: 'Button',
          position: 'center',

          width: 200,
          height: 50
        },
        {
          id: 'options',
          text: 'Options',
          component: 'Button',
          position: 'center',
          width: 200,
          height: 50
        },
        {
          id: 'slogan',
          text: 'May the schmup be with you',
          component: 'Label',
          position: 'center',
          width: window.innerWidth,
          height: 50,
          font: {
            size: '20px',
            fontWeight: 'bold',
            family: 'OpenDyslexic',
            color: '8f8'
          },
        }
      ]
    };


    public static guiMenu = {
      id: 'mainScreen',
      component: 'Window',
      padding: 4,
      position: { x: 0, y: 0 },
      width: window.innerWidth,
      height: window.innerHeight,

      layout: [1, 4],
      children: [
        {
          id: 'label1',
          text: 'Schmup Warz',
          font: {
            size: '45px',
            fontWeight: 'bold',
            family: 'OpenDyslexic',
            color: '8f8'
          },
          component: 'Label',
          position: 'center',
          width: window.innerWidth,
          height: 80
        },
        {
          id: 'play',
          text: 'Play',
          component: 'Button',
          position: 'center',

          width: 200,
          height: 50
        },
        {
          id: 'options',
          text: 'Options',
          component: 'Button',
          position: 'center',
          width: 200,
          height: 50
        },
        {
          id: 'slogan',
          text: 'May the schmup be with you',
          component: 'Label',
          position: 'center',
          width: window.innerWidth,
          height: 50,
          font: {
            size: '20px',
            fontWeight: 'bold',
            family: 'OpenDyslexic',
            color: '8f8'
          },
        }
      ]
    };
  }
}

