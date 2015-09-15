PIXI.loader
    .add('res/images.json')
    .add('res/fonts/hud.fnt')
    .add('res/fonts/normal.fnt')
    .load(function(loader, resources) {
        new example.core.SpaceshipWarrior(resources);
    });

