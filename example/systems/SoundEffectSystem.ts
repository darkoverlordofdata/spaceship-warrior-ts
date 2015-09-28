module example.systems {

  import SoundEffect = example.components.SoundEffect;
  import EFFECT = example.components.EFFECT;

  import Aspect = artemis.Aspect;
  import ComponentMapper = artemis.ComponentMapper;
  import Entity = artemis.Entity;
  import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
  import Mapper = artemis.annotations.Mapper;
  // import  = badlogic.gdx.Gdx;
  // import  = badlogic.gdx.audio.Sound;

  export class SoundEffectSystem extends EntityProcessingSystem {

    @Mapper(SoundEffect) se:ComponentMapper<SoundEffect>;

    public initialize() {
    }

    //@SuppressWarnings("unchecked")
    constructor() {
      super(Aspect.getAspectForAll(SoundEffect));
    }


    public processEach(e:Entity) {

      var soundEffect:SoundEffect = this.se.get(e);

      switch (soundEffect.effect) {
        case EFFECT.PEW:
          cc.audioEngine.playEffect('res/sounds/pew.ogg');
          break;
        case EFFECT.ASPLODE:
          cc.audioEngine.playEffect('res/sounds/asplode.ogg');
          break;
        case EFFECT.SMALLASPLODE:
          cc.audioEngine.playEffect('res/sounds/smallasplode.ogg');
          break;
        default:
          break;
      }

      e.removeComponentInstance(soundEffect);
      e.changedInWorld();
    }
  }
}

