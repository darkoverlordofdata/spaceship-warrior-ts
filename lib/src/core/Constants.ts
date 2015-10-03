/**
 * Constants
 */
module example.core {

  export var font = {font: '18px Skranji', align: 'left'};
  //export var font = {font: '20px Radio Stars', align: 'left'};

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

    public static isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    public static appName = "schmupwarz";
    public static FRAME_WIDTH:number = window.innerWidth;
    public static FRAME_HEIGHT:number = window.innerHeight;
    public static RATIO = window.devicePixelRatio * .6;

    public static SCALE_TYPE:ScaleType = ScaleType.FILL;

    public static properties = {
      leaderboard: "off", // use server leaderboard
      player: "",         // player screen name
      userId: "",         // unique user id
      playMusic: "true",  // music volume
      playSfx: "true"     // soundfx volume
    };


    public static assets = {

      images_json         : 'res/images.json',
      normal_fnt          : 'res/ezgui/fonts/normal.fnt',
      hud_fnt             : 'res/ezgui/fonts/hud.fnt',
      desyrel_fnt         : 'res/ezgui/fonts/desyrel.fnt',
      skranji_fnt         : 'res/ezgui/fonts/Skranji-Bold-40.fnt',
      asplode_ogg         : 'res/sounds/asplode.ogg',
      pew_ogg             : 'res/sounds/pew.ogg',
      smallasplode_ogg    : 'res/sounds/smallasplode.ogg',
      parallaxStars_frag  : 'res/glsl/parallaxStars.frag'

    };

    public static fortune = [
      '♬ Give me those ♫ Schmup Wars',
      "I <3 URANUS",
      'May the Schmup be with you',
      "Schmup It Good!",
      "So, at last we meet for the \nfirst time for the last time",
      "I am your father's brother's \nmother's cousin's ex \nwife's lawyer's father's",
      'The schmup is strong in this one',
      "Prepare for ludicrous speed!",
      "We are not men we are schmup",
      'Schmup is the path to the\n dark side',
      "There goes the planet"
    ];

    public static theme:string = 'kenney'; //'d16a'; /** DarkoverlordofdatA */

  }
}

