module example.systems {

  import SoundEffect = example.components.SoundEffect;
  import EFFECT = example.components.EFFECT;

  import Aspect = artemis.Aspect;
  import ComponentMapper = artemis.ComponentMapper;
  import Entity = artemis.Entity;
  import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
  import Mapper = artemis.annotations.Mapper;

  export class SoundEffectSystem extends EntityProcessingSystem {

    @Mapper(SoundEffect) se:ComponentMapper<SoundEffect>;


    private pew;
    private asplode;
    private smallasplode;

    public initialize() {
      var Howl = window['Howl'];

      this.pew = new Howl({urls:['res/sounds/pew.ogg']});
      this.asplode = new Howl({urls:['res/sounds/asplode.ogg']});
      this.smallasplode = new Howl({urls:['res/sounds/smallasplode.ogg']});
    }

    constructor() {
      super(Aspect.getAspectForAll(SoundEffect));
    }


    public processEach(e:Entity) {

      var soundEffect:SoundEffect = this.se.get(e);

      switch (soundEffect.effect) {
        case EFFECT.PEW:
          this.pew.play();
          break;
        case EFFECT.ASPLODE:
          this.asplode.play();
          break;
        case EFFECT.SMALLASPLODE:
          this.smallasplode.play();
          break;
        default:
          break;
      }

      e.removeComponentInstance(soundEffect);
      e.changedInWorld();
    }
  }
}

