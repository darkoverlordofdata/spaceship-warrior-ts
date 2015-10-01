module example.systems {

  import Position = example.components.Position;
  import Velocity = example.components.Velocity;
  import Constants = example.core.Constants;

  import Aspect = artemis.Aspect;
  import ComponentMapper = artemis.ComponentMapper;
  import Entity = artemis.Entity;
  import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
  import Mapper = artemis.annotations.Mapper;

  export class MovementSystem extends EntityProcessingSystem {
    @Mapper(Position) pm:ComponentMapper<Position>;
    @Mapper(Velocity) vm:ComponentMapper<Velocity>;

    constructor() {
      super(Aspect.getAspectForAll(Position, Velocity));
    }

    public processEach(e:Entity) {
      var position:Position = this.pm.get(e);
      var velocity:Velocity = this.vm.get(e);

      var delta = 1 / Constants.RATIO * this.world.delta;;
      position.x += velocity.vectorX * delta;
      position.y -= velocity.vectorY * delta;
    }
  }
}

