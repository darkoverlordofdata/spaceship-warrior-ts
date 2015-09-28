module example.templates {

  import Point = PIXI.Point;
  import Container = PIXI.Container;

  import MathUtils = artemis.utils.MathUtils;
  import Position = example.components.Position;
  import Sprite = example.components.Sprite;
  import Velocity = example.components.Velocity;
  import Bounds = example.components.Bounds;
  import Background = example.components.Background;
  import ColorAnimation = example.components.ColorAnimation;
  import Layer = example.components.Layer;
  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import Constants = example.core.Constants;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;
  import SpaceshipWarrior = example.core.SpaceshipWarrior;


  @EntityTemplate('background')
  export class BackgroundTemplate implements IEntityTemplate {

    public buildEntity(entity:artemis.Entity, world:artemis.World):artemis.Entity {

      var resources = EntitySystem.blackBoard.getEntry('resources');

      var shader = new PIXI.AbstractFilter(null, resources['res/glsl/parallaxStars.frag'].data, {
        time: {type: "f", value: performance.now()},
        resolution: {type: "2f", value: [window.innerHeight, window.innerWidth]}
      });

      entity.addComponent(Background, shader);
      entity.addComponent(Position, 0, 0);
      entity.addComponent(Sprite, (sprite:Sprite) => {
        var pos = sprite.position;
        pos.x = 0;
        pos.y = 0;
        sprite.layer = Layer.BACKGROUND;
        sprite.sprite_.filters = [shader];
        sprite.sprite_.height = window.innerHeight;
        sprite.sprite_.width = window.innerWidth;
        sprite.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));
      });
      return entity;
    }
  }
}