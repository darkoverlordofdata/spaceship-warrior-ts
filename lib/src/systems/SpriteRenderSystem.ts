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
      for (var i=0, l=entities.size(); i<l; i++) {
        this.processEach(entities.get(i));
      }
    }

    public processEach(e:Entity) {
      if (this.pm.has(e)) {
        var position:Position = this.pm.getSafe(e);
        var sprite:Sprite = this.sm.get(e);
        sprite.sprite_.position.set(position.x, position.y);
      }
    }


    //public inserted(e:Entity) {
    //  var sprite:Sprite = this.sm.get(e);
    //  sprite.sprite_['layer'] = sprite.layer;
    //
    //  this.sprites.children.sort((a, b) => {
    //    if (a['layer'] < b['layer']) return -1;
    //    if (a['layer'] > b['layer']) return 1;
    //    return 0;
    //  });
    //}


    protected removed(e:Entity) {
      var c:Sprite = <Sprite> e.getComponentByType(Sprite);
      c.removeFrom(this.sprites);
    }
  }
}

