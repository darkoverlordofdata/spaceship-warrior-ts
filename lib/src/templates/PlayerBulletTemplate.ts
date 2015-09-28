module example.templates {

  import Point = PIXI.Point;
  import Container = PIXI.Container;

  import Position = example.components.Position;
  import Sprite = example.components.Sprite;
  import Velocity = example.components.Velocity;
  import Bounds = example.components.Bounds;
  import Expires = example.components.Expires;
  import SoundEffect = example.components.SoundEffect;
  import Layer = example.components.Layer;
  import EFFECT = example.components.EFFECT;
  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import Constants = example.core.Constants;
  import Groups = example.core.Groups;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;

  @EntityTemplate('bullet')
  export class PlayerBulletTemplate implements IEntityTemplate {

    public buildEntity(entity:artemis.Entity, world:artemis.World, x:number, y:number):artemis.Entity {

      entity.addComponent(Position, x, y);
      entity.addComponent(Velocity, 0, 800);
      entity.addComponent(Bounds, 5);
      entity.addComponent(Expires, 5);
      entity.addComponent(SoundEffect, EFFECT.PEW);
      entity.addComponent(Sprite, 'bullet', (sprite:Sprite) => {
        var s:PIXI.Sprite = sprite.sprite_;
        s.tint = 0xffffff;
        var pos = s.position;
        pos.x = x;
        pos.y = y;
        sprite.layer = Layer.PARTICLES;
        sprite.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));
      });
      world.getManager<GroupManager>(GroupManager).add(entity, Groups.PLAYER_BULLETS);
      return entity;
    }
  }
}