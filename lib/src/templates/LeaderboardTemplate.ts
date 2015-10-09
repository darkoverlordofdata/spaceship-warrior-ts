module example.templates {

  import Point = PIXI.Point;
  import Container = PIXI.Container;

  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;
  import Entity = artemis.Entity;
  import World = artemis.World;

  import Properties = example.core.Properties;
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

  const font = {
      font: '40px Skranji',
      tint: 0xfffff
    };

    @EntityTemplate('leaderboard')
  export class LeaderboardTemplate implements IEntityTemplate {

    public buildEntity(entity:Entity, world:World):Entity {

      var x = window.innerWidth/2;
      var y = window.innerHeight/2;
      var f1 = window.devicePixelRatio === 1 ? 0 : 1;
      var f2 = window.devicePixelRatio === 1 ? 1 : 0;

      entity.addComponent(Position, ~~x, ~~y);
      entity.addComponent(Sprite, 'panel', (sprite:Sprite) => {
        var s:PIXI.Sprite = sprite.sprite_;

        var data = Properties.getLeaderboard(6);
        for (var k in data) {
          var row = data[k];
          var i = parseInt(k) + 1;
          var mmddyyyy = row.date.substr(4, 2) + '/' + row.date.substr(6, 2) + '/' + row.date.substr(0, 4);

          var text = new PIXI.extras.BitmapText(mmddyyyy+'', font);
          text.position.set(-(x/2)-(100*f1),-(y/2)+(i*40));
          s.addChild(text);

          var text = new PIXI.extras.BitmapText(row.score+'', font);
          text.position.set(-(x/2)+200+(100*f2),-(y/2)+(i*40));
          s.addChild(text);

        }

        s.width = window.innerWidth * .75;
        s.height = window.innerHeight/2;
        s.position.set(~~x, ~~y);
        sprite.layer = Layer.GUI;
        sprite.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));
      });
      world.getManager<GroupManager>(GroupManager).add(entity, Groups.GUI_LEADERBOARD);
      return entity;
    }
  }
}