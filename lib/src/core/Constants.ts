/**
 * core/Constants.ts
 *
 * Core Constants for Schmup Warz
 *
 */
module example.core {

  /**
   * GroupManager Groups
   */
  export enum Groups {
    PLAYER_BULLETS,
    PLAYER_SHIP,
    PLAYER_LIVES,
    PLAYER_STATUS,
    ENEMY_SHIPS,
    ENEMY_BULLETS,
    ENEMY_MINES,
    GUI,
    GUI_CREDITS,
    GUI_LEADERBOARD
  }

  export enum ScaleType {
    FILL, // fill to fit screen
    FIXED // scale fixed size to fit the screen
  }
  export class Constants {

    public static isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    public static theme:string = 'kenney';
    public static font = {font: '18px Skranji', align: 'left'};

    public static appName = "schmupwarz";
    public static FRAME_WIDTH:number = window.innerWidth;
    public static FRAME_HEIGHT:number = window.innerHeight;
    public static RATIO = window.devicePixelRatio * .6;

    public static SCALE_TYPE:ScaleType = ScaleType.FILL;

    public static properties = {
      skip: "false",
      leaderboard: "off", // use server leaderboard
      player: "",         // player screen name
      userId: "",         // unique user id
      playMusic: "true",  // music volume
      playSfx: "true"     // soundfx volume
    };


    public static assets = {

      images_json         : 'res/images.json',
      logo_png            : 'res/images/logo.png',
      panel_png           : 'res/images/panel.png',
      opendyslexic20_fnt  : 'res/ezgui/fonts/OpenDyslexic20.fnt',
      opendyslexic24_fnt  : 'res/ezgui/fonts/OpenDyslexic24.fnt',
      opendyslexic32_fnt  : 'res/ezgui/fonts/OpenDyslexic32.fnt',
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

    public static credits = `
    Built by darkoverlordofdata, using artmemis, pixi.js,
    localStorageDB, howler, and ezgui.

    Schmup Warz is a demo of ArtemisTS, and is based on
    Spaceship Warrior by @Flet
    (https://github.com/Flet/spaceship-warrior-gradle)

    MIT License

                            [tap for legend]
    `;

    public static about = `
    Destroy colony ships from the BEM homeworld
    before they can land on Earth.
    They don't fire guns. They use sub-space
    mines that our bullets can't seem to hit.

    Clearing all the ships from the screen resets
    your current health to 100%. You won't be able
    to clear the screen *and* dodge mines.

    Space/Touch to fire  |  Mouse/Touch to move.

                            [tap for credits]
    `;

  }
}

