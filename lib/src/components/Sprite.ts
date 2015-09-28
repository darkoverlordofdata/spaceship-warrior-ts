module example.components {

  import Component = artemis.Component;
  import PooledComponent = artemis.PooledComponent;
  import Pooled = artemis.annotations.Pooled;
  import Point = PIXI.Point;
  import Container = PIXI.Container;

  export enum Layer {
    DEFAULT,
    BACKGROUND,
    TEXT,
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
    public sprite_:PIXI.Sprite;

    initialize(name?:string|Function, lambda?) {
      if ('function' === typeof name) {
        this.sprite_ = new PIXI.Sprite();
        lambda = name;
        lambda(this);
      } else {
        if (name === undefined) {
          this.sprite_ = new PIXI.Sprite();
        } else {
          this.name = <string>name;
          this.sprite_ = new PIXI.Sprite(PIXI.Texture.fromFrame(`${this.name}.png`));
          var s = 1 / window.devicePixelRatio;
          var scale:Point = this.sprite_.scale;
          scale.x = scale.y = s;
          var anchor:Point = this.sprite_.anchor;
          anchor.x = anchor.y = .5;
          if (lambda !== undefined) {
            lambda(this);
          }
        }
      }
    }

    addTo(layer:Container) {
      layer.addChild(this.sprite_);
    }

    removeFrom(layer:Container) {
      layer.removeChild(this.sprite_);
    }

    public reset() {
      this.sprite_ = null;
    }

  }

  Sprite.prototype.layer = Layer.DEFAULT;
  Sprite.prototype.name = '';
  Sprite.prototype.sprite_ = null;
}

