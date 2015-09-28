module example.systems {
	
	import ScaleAnimation = example.components.ScaleAnimation;
	import Sprite = example.components.Sprite;
	
	import Aspect = artemis.Aspect;
	import ComponentMapper = artemis.ComponentMapper;
	import Entity = artemis.Entity;
	import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
	import Mapper = artemis.annotations.Mapper;
	
	export class ScaleAnimationSystem extends EntityProcessingSystem {
		@Mapper(ScaleAnimation) sa:ComponentMapper<ScaleAnimation>;
		@Mapper(Sprite) sm:ComponentMapper<Sprite>;
	
		//@SuppressWarnings("unchecked")
		constructor() {
			super(Aspect.getAspectForAll(ScaleAnimation));
		}
	
		
		public processEach(e:Entity) {
			var scaleAnimation:ScaleAnimation = this.sa.get(e);

			if (scaleAnimation.active) {
				var sprite:Sprite = this.sm.get(e);

				sprite.sprite_.scaleX += scaleAnimation.speed * this.world.delta;
				sprite.sprite_.scaleY = sprite.sprite_.scaleX;
	
				if (sprite.sprite_.scaleX > scaleAnimation.max) {
					sprite.sprite_.scaleX = scaleAnimation.max;
					scaleAnimation.active = false;
				} else if (sprite.sprite_.scaleX < scaleAnimation.min) {
					sprite.sprite_.scaleX = scaleAnimation.min;
					scaleAnimation.active = false;
				}
			}
		}
	
	}
}

