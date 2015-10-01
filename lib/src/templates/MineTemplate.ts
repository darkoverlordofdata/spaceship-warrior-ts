module example.templates {

  import Point = PIXI.Point;
  import Container = PIXI.Container;

  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;
  import Entity = artemis.Entity;
  import World = artemis.World;

  import Mine = example.components.Mine;
  import Sprite = example.components.Sprite;
  import Position = example.components.Position;
  import Velocity = example.components.Velocity;
  import Health = example.components.Health;
  import Bounds = example.components.Bounds;
  import Player = example.components.Player;
  import Layer = example.components.Layer;
  import Constants = example.core.Constants;
  import Groups = example.core.Groups;

  @EntityTemplate('mine')
  export class MineTemplate implements IEntityTemplate {

    public buildEntity(entity:Entity, world:World, name:string, health: number, x:number, y:number, velocityX:number, velocityY:number, boundsRadius:number):Entity {

      entity.addComponent(Mine);
      entity.addComponent(Position, ~~x, ~~y);
      entity.addComponent(Velocity, velocityX, velocityY);
      entity.addComponent(Bounds, boundsRadius);
      entity.addComponent(Health, health, health);
      entity.addComponent(Sprite, name, (sprite:Sprite) => {
        var s:PIXI.Sprite = sprite.sprite_;
        s.position.set(~~x, ~~y);
        sprite.layer = Layer.MINES;
        sprite.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));
      });
      world.getManager<GroupManager>(GroupManager).add(entity, Groups.ENEMY_MINES);
      return entity;
    }
  }
}