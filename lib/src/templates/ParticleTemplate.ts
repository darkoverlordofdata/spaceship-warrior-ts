module example.templates {

  const Tau = 2*Math.PI;

  import Point = PIXI.Point;
  import Container = PIXI.Container;

  import MathUtils = artemis.utils.MathUtils;
  import Position = example.components.Position;
  import Sprite = example.components.Sprite;
  import Velocity = example.components.Velocity;
  import ColorAnimation = example.components.ColorAnimation;
  import Expires = example.components.Expires;
  import Layer = example.components.Layer;
  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import Constants = example.core.Constants;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;

  @EntityTemplate('particle')

  export class ParticleTemplate implements IEntityTemplate {

    public buildEntity(entity:artemis.Entity, world:artemis.World, x:number, y:number):artemis.Entity {

      var radians:number = Math.random()*Tau;// MathUtils.random(Tau);
      var magnitude:number = MathUtils.random(200);
      var velocityX = magnitude * Math.cos(radians);
      var velocityY = magnitude * Math.sin(radians);

      entity.addComponent(Position, x, y);
      entity.addComponent(Velocity, velocityX, velocityY);
      entity.addComponent(Expires, 1);
      //0xffd800ff
      entity.addComponent(Sprite, 'particle', 0xffd800ff, (sprite:Sprite) => {
        var s = MathUtils.random(0.5, 1);
        var scale = sprite.scale;
        scale.x = s;
        scale.y = s;
        var pos = sprite.position;
        pos.x = x*2;
        pos.y = y;
        sprite.layer = Layer.PARTICLES;
        sprite.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));
      });
      entity.addComponent(ColorAnimation, (colorAnimation:ColorAnimation) => {
        colorAnimation.alphaAnimate = true;
        colorAnimation.alphaSpeed = -1;
        colorAnimation.alphaMin = 0;
        colorAnimation.alphaMax = 1;
        colorAnimation.repeat = false;
      });
      return entity;
    }
  }
}