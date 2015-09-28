/**
 * Constants
 */
module example.core {

  /**
   * GroupManager Groups
   */
  export enum Groups {
    PLAYER_BULLETS,
    PLAYER_SHIP,
    ENEMY_SHIPS,
    ENEMY_BULLETS
  }

  export enum ScaleType {
    FILL, // fill to fit screen
    FIXED // scale fixed size to fit the screen
  }
  export class Constants {

    public static FRAME_WIDTH:number = window.innerWidth;
    public static FRAME_HEIGHT:number = window.innerHeight;

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

  }
}

