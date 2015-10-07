module example.components {

  import Constants = example.core.Constants;
  import Component = artemis.Component;
  import PooledComponent = artemis.PooledComponent;
  import Pooled = artemis.annotations.Pooled;
  import Point = PIXI.Point;
  import Container = PIXI.Container;
  import Texture = PIXI.Texture;
  import ZSprite = PIXI.Sprite;
  /**
   * ZSprite!?! Is that SAP?
   * Careful with that axe, Eugene.
   */

  export enum Layer {
    DEFAULT,
    BACKGROUND,
    TEXT,
    LIVES,
    MINES,
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
    public sprite_:ZSprite;

    initialize(name?:string|Function|Object, lambda?) {

      var ctor = {
        'string': () => {
          this.name = <string>name;
          var s = this.sprite_ = new ZSprite(Texture.fromFrame(`${this.name}.png`));
          s.scale.set(1 / Constants.RATIO);
          s.anchor.set(.5, .5);
        },
        'object': () => {
          this.sprite_ = <ZSprite>name;
        },
        'function': () => {
          this.sprite_ = new ZSprite();
          lambda = name;
        }
      }[typeof name];
      if (ctor) ctor();
      if (lambda) lambda(this);
    }

    addTo(layer:Container) {
      this.sprite_['layer'] = this.layer;
      layer.addChild(this.sprite_, 0);
      layer.children.sort((a, b) => {
        if (a['layer'] < b['layer']) return -1;
        if (a['layer'] > b['layer']) return 1;
        return 0;
      });
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

