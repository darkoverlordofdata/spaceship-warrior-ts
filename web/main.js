PIXI.loader
    .add('res/images.json')
    .add('res/fonts/opendyslexic.fnt')
    .add('res/fonts/carrier_command.fnt')
    .load(function(loader, resources) {
        new example.core.SpaceshipWarrior(resources);
    });

