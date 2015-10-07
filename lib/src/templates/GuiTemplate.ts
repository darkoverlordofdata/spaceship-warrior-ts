console.log('loading GuiTemplate');
module example.templates {

  import Point = PIXI.Point;
  import Container = PIXI.Container;

  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;
  import Entity = artemis.Entity;
  import World = artemis.World;

  import Gui = example.components.Gui;
  import Position = example.components.Position;
  import Sprite = example.components.Sprite;
  import Velocity = example.components.Velocity;
  import Bounds = example.components.Bounds;
  import Player = example.components.Player;
  import Layer = example.components.Layer;
  import Constants = example.core.Constants;
  import Groups = example.core.Groups;
  import MenuView = example.views.MenuView;
  import GameSystems = example.core.GameSystems;

  @EntityTemplate('gui')
  export class GuiTemplate implements IEntityTemplate {

    public gui:MenuView;

    public buildEntity(entity:Entity, world:World, system:GameSystems):Entity {

      this.gui = new MenuView(system);
      this.gui.show();
      EntitySystem.blackBoard.setEntry('gui', this.gui);
      entity.addComponent(Gui, this.gui);
      entity.addComponent(Position, 0, 0);
      entity.addComponent(Sprite, this.gui.view, (sprite:Sprite) => {
        //var s:PIXI.Sprite = sprite.sprite_;
        //s.position.set(0, 0);
        sprite.layer = -1;
        sprite.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));
      });
      world.getManager<GroupManager>(GroupManager).add(entity, Groups.GUI);
      return entity;
    }
  }
}