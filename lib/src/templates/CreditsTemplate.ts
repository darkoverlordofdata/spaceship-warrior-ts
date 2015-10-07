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

  @EntityTemplate('credits')
  export class CreditsTemplate implements IEntityTemplate {

    public buildEntity(entity:Entity, world:World):Entity {

      var x = window.innerWidth/2;
      var y = window.innerHeight/2;

      var f = window.devicePixelRatio === 1 ? 2 : 1;
      var text = new PIXI.Text(Constants.credits, Constants.font);
      text.anchor.set(0);
      text.position.set(-(x/f),-(y/2));

      entity.addComponent(Position, ~~x, ~~y);
      entity.addComponent(Sprite, 'panel', (sprite:Sprite) => {
        var s:PIXI.Sprite = sprite.sprite_;
        s.addChild(text);
        s.width = window.innerWidth * .75;
        s.height = window.innerHeight/2;
        s.position.set(~~x, ~~y);
        sprite.layer = 5;
        sprite.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));
      });
      world.getManager<GroupManager>(GroupManager).add(entity, Groups.GUI_CREDITS);
      return entity;
    }
  }
}