module example.systems {

  import SoundEffect = example.components.SoundEffect;
  import EFFECT = example.components.EFFECT;

  import Aspect = artemis.Aspect;
  import ComponentMapper = artemis.ComponentMapper;
  import Entity = artemis.Entity;
  import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
  import Mapper = artemis.annotations.Mapper;
  import SimpleTrigger = artemis.blackboard.SimpleTrigger;
  import BlackBoard = artemis.blackboard.BlackBoard;
  import TriggerStateType = artemis.blackboard.TriggerStateType;
  import EntitySystem = artemis.EntitySystem;

  export class SoundEffectSystem extends EntityProcessingSystem {

    @Mapper(SoundEffect) se:ComponentMapper<SoundEffect>;


    private pew;
    private asplode;
    private smallasplode;
    private playSfx:boolean=false;
    private effect;

    constructor() {
      super(Aspect.getAspectForAll(SoundEffect));
    }

    public initialize() {
      var Howl = window['Howl'];

      this.pew = new Howl({urls:['res/sounds/pew.ogg']});
      this.asplode = new Howl({urls:['res/sounds/asplode.ogg']});
      this.smallasplode = new Howl({urls:['res/sounds/smallasplode.ogg']});
      this.playSfx = <boolean>EntitySystem.blackBoard.getEntry('playSfx');

      this.effect = [];
      this.effect[EFFECT.PEW] = this.pew;
      this.effect[EFFECT.ASPLODE] = this.asplode;
      this.effect[EFFECT.SMALLASPLODE] = this.smallasplode;

      //var trigger:SimpleTrigger = new SimpleTrigger('playSfx', this.condition, this.onChange);
      //EntitySystem.blackBoard.addTrigger(trigger);
    }

    //private onChange(t:TriggerStateType) {
    //  console.log('changed');
    //
    //}
    //private condition(b:BlackBoard, t:TriggerStateType):boolean {
    //  console.log('condition');
    //  return true;
    //}

    public processEach(e:Entity) {

      if (!this.playSfx) return;

      var effect = this.se.get(e);
      var sound = this.effect[effect.effect];
      if (sound) sound.play();
      e.removeComponentInstance(effect);
      e.changedInWorld();
    }
  }
}

