module example.templates {

  import Point = PIXI.Point;
  import Container = PIXI.Container;

  import Position = example.components.Position;
  import Sprite = example.components.Sprite;
  import Velocity = example.components.Velocity;
  import Bounds = example.components.Bounds;
  import Health = example.components.Health;
  import Layer = example.components.Layer;
  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import Constants = example.core.Constants;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;

  @EntityTemplate('enemy')
  export class EnemyShipTemplate implements IEntityTemplate {

    public buildEntity(entity:artemis.Entity, world:artemis.World, name:string, layer:Layer, health:number, x:number, y:number, velocityX:number, velocityY:number, boundsRadius:number):artemis.Entity {

      entity.addComponent(Position, x, y);
      entity.addComponent(Velocity, velocityX, velocityY);
      entity.addComponent(Bounds, boundsRadius);
      entity.addComponent(Health, health, health);
      entity.addComponent(Sprite, name, 0xff008e, (sprite:Sprite) => {
        var pos = sprite.position;
        pos.x = x;
        pos.y = y;
        sprite.layer = layer;
        sprite.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));
      });
      world.getManager<GroupManager>(GroupManager).add(entity, Constants.Groups.ENEMY_SHIPS);
      return entity;
    }
  }
}