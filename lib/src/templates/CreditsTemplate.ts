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

  const font = {font: '20px Arial', align: 'left'};
  const font1 = {font: 'bold 24px Arial', align: 'left'};

  @EntityTemplate('credits')
  export class CreditsTemplate implements IEntityTemplate {

    public buildEntity(entity:Entity, world:World, texts):Entity {

      var x = window.innerWidth/2;
      var y = window.innerHeight/2;
      var index = 0;

      var f = window.devicePixelRatio === 1 ? 2 : 1;
      var f2 = window.devicePixelRatio === 1 ? 0 : 50;
      var logo:PIXI.Sprite = new PIXI.Sprite(PIXI.Texture.fromFrame('d16a.png'));
      var text = new PIXI.Text(texts[index], font);
      text.anchor.set(0);
      text.position.set(-(x/f)-f2 ,-(y/2));

      var panel = new Container();
      logo.position.set(225, 100);
      panel.addChild(text);
      panel.addChild(logo);
      text.text = texts[0];


      entity.addComponent(Position, ~~x, ~~y);
      entity.addComponent(Sprite, 'panel', (sprite:Sprite) => {
        var s:PIXI.Sprite = sprite.sprite_;
        s.addChild(panel);
        s.width = window.innerWidth * .75;
        s.height = window.innerHeight/2;
        s.position.set(~~x, ~~y);

        var onTouchStart = () => {
          index = (index+1)%3;
          switch(index) {
            case 0: //  ABOUT
              panel.removeChildren();

              logo.position.set(225, 100);
              panel.addChild(text);
              panel.addChild(logo);
              text.text = texts[index];
              break;

            case 1: //  CREDITS
              panel.removeChildren();

              logo.position.set(225, 100);
              panel.addChild(text);
              panel.addChild(logo);
              text.text = texts[index];
              break;

            case 2: //  LEGEND
              panel.removeChildren();

              var text01:PIXI.Text = new PIXI.Text('Supply - 20', font1);
              var enemy1:PIXI.Sprite = new PIXI.Sprite(PIXI.Texture.fromFrame('enemy1.png'));
              text01.position.set(-250, -50);
              panel.addChild(text01);
              enemy1.width = 40;
              enemy1.height = 40;
              enemy1.anchor.set(1,1);
              enemy1.position.set(0, -50);
              panel.addChild(enemy1);

              var text02:PIXI.Text = new PIXI.Text('Scout - 10', font1);
              var enemy2:PIXI.Sprite = new PIXI.Sprite(PIXI.Texture.fromFrame('enemy2.png'));
              text02.position.set(-50, -50);
              panel.addChild(text02);
              enemy2.width = 80;
              enemy2.height = 80;
              enemy2.anchor.set(1,1);
              enemy2.position.set(-150, -50);
              panel.addChild(enemy2);

              var text03:PIXI.Text = new PIXI.Text('Creche - 60', font1);
              var enemy3:PIXI.Sprite = new PIXI.Sprite(PIXI.Texture.fromFrame('enemy3.png'));
              text03.position.set(100, -50);
              panel.addChild(text03);
              enemy3.width = 90;
              enemy3.height = 90;
              enemy3.anchor.set(1,1);
              enemy3.position.set(200, -50);
              panel.addChild(enemy3);

              var textNext:PIXI.Text = new PIXI.Text('[tap for about]', font);
              textNext.position.set(-50, 0);
              panel.addChild(textNext);

              var text11:PIXI.Text = new PIXI.Text('Damage - 10', font1);
              var mine1:PIXI.Sprite = new PIXI.Sprite(PIXI.Texture.fromFrame('mine1.png'));
              text11.position.set(-175, 100);
              panel.addChild(text11);
              mine1.anchor.set(1,1);
              mine1.position.set(-125, 100);
              panel.addChild(mine1);

              var text12:PIXI.Text = new PIXI.Text('Damage - 20', font1);
              var mine2:PIXI.Sprite = new PIXI.Sprite(PIXI.Texture.fromFrame('mine2.png'));
              text12.position.set(25, 100);
              panel.addChild(text12);
              mine2.anchor.set(1,1);
              mine2.position.set(75, 100);
              panel.addChild(mine2);

              logo.position.set(225, 100);
              panel.addChild(logo);
              break;
          }
        };

        s.interactive = true;
        s.on('mousedown', onTouchStart);
        s.on('touchstart', onTouchStart);

        sprite.layer = Layer.GUI;
        sprite.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));
      });
      world.getManager<GroupManager>(GroupManager).add(entity, Groups.GUI_CREDITS);
      return entity;
    }
  }
}