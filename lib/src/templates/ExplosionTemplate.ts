module example.templates {

  import Point = PIXI.Point;
  import Container = PIXI.Container;

  import Position = example.components.Position;
  import Sprite = example.components.Sprite;
  import Velocity = example.components.Velocity;
  import Bounds = example.components.Bounds;
  import Player = example.components.Player;
  import Expires = example.components.Expires;
  import SoundEffect = example.components.SoundEffect;
  import ScaleAnimation = example.components.ScaleAnimation;
  import Layer = example.components.Layer;
  import EFFECT = example.components.EFFECT;
  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import Constants = example.core.Constants;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;


  /**
   * Base Explosion Template
   */
  class ExplosionTemplate implements IEntityTemplate {

    public buildEntity(entity:artemis.Entity, world:artemis.World, x:number, y:number, scale:number):artemis.Entity {

      entity.addComponent(Position, ~~x, ~~y);
      entity.addComponent(Expires, 0.5);
      entity.addComponent(Sprite, 'explosion', (sprite:Sprite) => {
        var s:PIXI.Sprite = sprite.sprite_;
        s.tint = 0xffd80080;
        s.scale.set(scale/(Constants.RATIO*2));
        s.position.set(~~x, ~~y);
        sprite.layer = Layer.PARTICLES;
        sprite.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));
      });
      entity.addComponent(ScaleAnimation, (scaleAnimation:ScaleAnimation) => {
        scaleAnimation.active = true;
        scaleAnimation.max = scale/(Constants.RATIO*2);
        scaleAnimation.min = scale/(100*(Constants.RATIO*2));
        scaleAnimation.speed = -3.0;
        scaleAnimation.repeat = false;
      });
      return entity;
    }
  }

  /**
   * Small Explosion
   */
  @EntityTemplate('small')
  export class SmallExplosionTemplate extends ExplosionTemplate {

    public buildEntity(entity:artemis.Entity, world:artemis.World, x:number, y:number):artemis.Entity {

      super.buildEntity(entity, world, x, y, 0.1);

      var sf:SoundEffect = new SoundEffect();
      sf.effect = EFFECT.SMALLASPLODE;
      entity.addComponent(sf);
     return entity;

    }
  }

  /**
   * Big Explosion
   */
  @EntityTemplate('big')
  export class BigExplosionTemplate extends ExplosionTemplate {

    public buildEntity(entity:artemis.Entity, world:artemis.World, x:number, y:number):artemis.Entity {
      super.buildEntity(entity, world, x, y, 0.5);

      var sf:SoundEffect = new SoundEffect();
      sf.effect = EFFECT.ASPLODE;
      entity.addComponent(sf);
      return entity;

    }
  }

  /**
   * Big Explosion
   */
  @EntityTemplate('huge')
  export class HugeExplosionTemplate extends ExplosionTemplate {

    public buildEntity(entity:artemis.Entity, world:artemis.World, x:number, y:number):artemis.Entity {
      super.buildEntity(entity, world, x, y, Constants.RATIO);

      var sf:SoundEffect = new SoundEffect();
      sf.effect = EFFECT.ASPLODE;
      entity.addComponent(sf);
      return entity;

    }
  }

}