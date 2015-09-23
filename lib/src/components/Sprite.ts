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

    public name_:string;
    public sprite_:PIXI.Sprite;

    initialize(name?:string|Function, color?, lambda?) {
      if ('function' === typeof name) {
        this.sprite_ = new PIXI.Sprite();
        lambda = name;
        lambda(this);
      } else {
        if (name === undefined) {
          this.sprite_ = new PIXI.Sprite();
        } else {
          this.name_ = <string>name;
          this.sprite_ = new PIXI.Sprite(PIXI.Texture.fromFrame(`${this.name}.png`));
          var s = 1 / window.devicePixelRatio;
          var scale:Point = this.sprite_.scale;
          scale.x = s;
          scale.y = s;
          var anchor:Point = this.sprite_.anchor;
          anchor.x = .5;
          anchor.y = .5;
          if (color !== undefined && color !== null) {
            this.color = color;
          }
          if (lambda !== undefined) {
            lambda(this);
          }
        }
      }
    }

    get name():string {
      return this.name_;
    }

    get scale():PIXI.Point {
      return this.sprite_.scale;
    }

    set scale(value:PIXI.Point) {
      this.sprite_.scale = value;
    }

    get rotation():number {
      return this.sprite_.rotation;
    }

    set rotation(value:number) {
      this.sprite_.rotation = value;
    }

    get position():Point {
      return this.sprite_.position;
    }

    set position(value:Point) {
      this.sprite_.position = value;
    }

    get color():number {
      return this.sprite_.tint;
    }

    set color(value:number) {
      this.sprite_.tint = value;
      //this.sprite_.setColor(cc.color(this.r_, this.g_, this.b_));
    }

    get alpha():number {
      return this.sprite_.alpha;
    }

    set alpha(value:number) {
      this.sprite_.alpha = value;
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
  Sprite.prototype.name_ = '';
  Sprite.prototype.sprite_ = null;
}

