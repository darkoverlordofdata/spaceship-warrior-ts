PIXI.loader.add('res/images.json').load(function(loader, resources) {
    new example.core.SpaceshipWarrior(resources);
});

