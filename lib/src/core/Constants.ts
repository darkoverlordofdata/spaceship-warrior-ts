module example.core {

  export class Constants {

    public static FRAME_WIDTH:number = window.innerWidth;
    public static FRAME_HEIGHT:number = window.innerHeight;

    public static Groups = {
      PLAYER_BULLETS: "player bullets",
      PLAYER_SHIP: "player ship",
      ENEMY_SHIPS: "enemy ships",
      ENEMY_BULLETS: "enemy bullets"
    };

    public static assets = [
      'res/images.json',
      'res/fonts/normal.fnt',
      'res/fonts/hud.fnt',
      'res/sounds/asplode.ogg',
      'res/sounds/pew.ogg',
      'res/sounds/smallasplode.ogg',
      'res/glsl/parallaxStars.frag'
    ];

  }
}

