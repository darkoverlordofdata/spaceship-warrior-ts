PIXI.loader
    .add('res/images.json')
    .add('res/fonts/opendyslexic.fnt')
    .load(function(loader, resources) {
        new example.core.SpaceshipWarrior(resources);
    });

