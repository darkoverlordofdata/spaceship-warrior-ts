module example.components {

  import Component = artemis.Component;
  import PooledComponent = artemis.PooledComponent;
  import Pooled = artemis.annotations.Pooled;
  import Point = PIXI.Point;
  import Container = PIXI.Container;
  import Sprite = PIXI.Sprite;
  import Texture = PIXI.Texture;

  @Pooled()
  export class Vital extends PooledComponent {

    public static className = 'Vital';
    public good:Sprite;
    public bad:Sprite;

    public initialize(good?:string, bad?:string, lambda?) {
      this.good = new Sprite(Texture.fromFrame(`${good}.png`));
      this.bad = new Sprite(Texture.fromFrame(`${bad}.png`));

      if (lambda) lambda(this);

    }
  }
}

