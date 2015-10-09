module example.systems {

  import HashMap = artemis.utils.HashMap;

  import Position = example.components.Position;
  import Sprite = example.components.Sprite;

  import Aspect = artemis.Aspect;
  import ComponentMapper = artemis.ComponentMapper;
  import Entity = artemis.Entity;
  import EntitySystem = artemis.EntitySystem;
  import Bag = artemis.utils.Bag;
  import ImmutableBag = artemis.utils.ImmutableBag;
  import Mapper = artemis.annotations.Mapper;
  import Constants = example.core.Constants;
  import Container = PIXI.Container;
  import Point = PIXI.Point;

  export class SpriteRenderSystem extends EntitySystem {
    @Mapper(Position) pm:ComponentMapper<Position>;
    @Mapper(Sprite) sm:ComponentMapper<Sprite>;

    private sprites:Container;

    constructor() {
      super(Aspect.getAspectForAll(Position, Sprite));
    }

    public initialize() {
      this.sprites = EntitySystem.blackBoard.getEntry<Container>('sprites');
    }

    protected checkProcessing():boolean {
      return true;
    }

    public processEntities(entities:ImmutableBag<Entity>) {

      var pm = this.pm;
      var sm = this.sm;

      for (var i=0, l=entities.size(); i<l; i++) {
        var e = entities.get(i);
        if (pm.has(e)) {
          var position:Position = pm.getSafe(e);
          var sprite:Sprite = sm.get(e);
          if (sprite) sprite.sprite_.position.set(position.x, position.y);
        }

      }
    }


    protected removed(e:Entity) {
      var c:Sprite = <Sprite> e.getComponentByType(Sprite);
      c.removeFrom(this.sprites);
    }
  }
}

