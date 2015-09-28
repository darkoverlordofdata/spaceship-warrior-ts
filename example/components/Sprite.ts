module example.components {
	
	import Component = artemis.Component;
  import PooledComponent = artemis.PooledComponent;
  import Pooled = artemis.annotations.Pooled;

	export enum Layer {
		DEFAULT,
		BACKGROUND,
		ACTORS_1,
		ACTORS_2,
		ACTORS_3,
		PARTICLES
		
		// getLayerId() {
		// 	return ordinal();
		// }
	}

  @Pooled()
	export class Sprite extends PooledComponent {
    public static className = 'Sprite';
		public layer:Layer;
		
		public name:string;
		public sprite_:cc.Sprite;
		
    initialize(name?:string, lambda?) {
			this.sprite_ = new cc.Sprite("#"+name+".png");
      this.sprite_.setOpacityModifyRGB(true);
      this.name = name;
      if (lambda) {
        lambda(this);
      }
		}
			

    addTo(layer:cc.Node) {
      layer.addChild(this.sprite_);
    }

    removeFrom(layer:cc.Node) {
      layer.removeChild(this.sprite_);
    }

		public reset(){
			this.sprite_ = null;
		}

  }

	Sprite.prototype.layer = Layer.DEFAULT;
	Sprite.prototype.name = '';
	Sprite.prototype.sprite_ = null;
}

