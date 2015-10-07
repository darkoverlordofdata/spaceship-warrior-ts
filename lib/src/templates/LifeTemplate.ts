module example.templates {

  import Point = PIXI.Point;
  import Container = PIXI.Container;

  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;
  import Entity = artemis.Entity;
  import World = artemis.World;

  import Position = example.components.Position;
  import Sprite = example.components.Sprite;
  import Velocity = example.components.Velocity;
  import Bounds = example.components.Bounds;
  import Player = example.components.Player;
  import Layer = example.components.Layer;
  import Constants = example.core.Constants;
  import Groups = example.core.Groups;

  @EntityTemplate('life')
  export class LifeTemplate implements IEntityTemplate {

    public buildEntity(entity:Entity, world:World, ordinal:number):Entity {

      var x = (Constants.FRAME_WIDTH/2)-((ordinal+1) * 40)+87;
      var y = 80;

      entity.addComponent(Position, ~~x, ~~y);
      entity.addComponent(Sprite, 'life', (sprite:Sprite) => {
        var s:PIXI.Sprite = sprite.sprite_;
        //s.tint = 0x0000ff;
        s.position.set(~~x, ~~y);
        sprite.layer = Layer.LIVES;
        sprite.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));
      });
      world.getManager<GroupManager>(GroupManager).add(entity, Groups.PLAYER_LIVES);
      return entity;
    }
  }
}