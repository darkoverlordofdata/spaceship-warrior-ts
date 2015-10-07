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
  import Texture = PIXI.Texture;
  import Vital = example.components.Vital;
  import Velocity = example.components.Velocity;
  import Bounds = example.components.Bounds;
  import Player = example.components.Player;
  import Layer = example.components.Layer;
  import Constants = example.core.Constants;
  import Groups = example.core.Groups;

  @EntityTemplate('status')
  export class StatusTemplate implements IEntityTemplate {

    public buildEntity(entity:Entity, world:World):Entity {

      var x = (Constants.FRAME_WIDTH/2)-50;
      var y = 20;

      entity.addComponent(Position, ~~x, ~~y);
      entity.addComponent(Sprite, new PIXI.Sprite(), (sprite:Sprite) => {
        var s:PIXI.Sprite = sprite.sprite_;

        entity.addComponent(Vital,'status_yellow', 'status_red', (vital:Vital) => {
          s.addChild(vital.bad);
          s.addChild(vital.good);

        });
        s.position.set(~~x, ~~y);
        sprite.layer = Layer.LIVES;
        sprite.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));
      });
      world.getManager<GroupManager>(GroupManager).add(entity, Groups.PLAYER_STATUS);
      return entity;
    }
  }
}