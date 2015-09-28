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
				var sprite:PIXI.Sprite = this.sm.get(e).sprite_;

				sprite.scale.x += scaleAnimation.speed * this.world.delta;
				sprite.scale.y = sprite.scale.x;
	
				if (sprite.scale.x > scaleAnimation.max) {
					sprite.scale.x = scaleAnimation.max;
					scaleAnimation.active = false;
				} else if (sprite.scale.x < scaleAnimation.min) {
					sprite.scale.x = scaleAnimation.min;
					scaleAnimation.active = false;
				}
			}
		}
	
	}
}

