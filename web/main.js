PIXI.loader
    .add('res/images.json')
    .add('res/fonts/normal.fnt')
    .add('res/fonts/hud.fnt')
    .load(function(loader, resources) {
        new example.core.SpaceshipWarrior(resources);
    });

