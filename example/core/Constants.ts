module example.core {
	
	export class Constants {

			public static FRAME_WIDTH:number = window.innerWidth ? window.innerWidth : 960;
			public static FRAME_HEIGHT:number = window.innerHeight ? window.innerHeight : 640;
				
			public static Groups = {
				PLAYER_BULLETS: "player bullets",
				PLAYER_SHIP: "player ship",
				ENEMY_SHIPS: "enemy ships",
				ENEMY_BULLETS: "enemy bullets"
			}
	
	}
}

