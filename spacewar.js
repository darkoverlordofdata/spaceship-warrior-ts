var example;
(function (example) {
    var core;
    (function (core) {
        var Constants = (function () {
            function Constants() {
            }
            Constants.FRAME_WIDTH = window.innerWidth;
            Constants.FRAME_HEIGHT = window.innerHeight;
            Constants.Groups = {
                PLAYER_BULLETS: "player bullets",
                PLAYER_SHIP: "player ship",
                ENEMY_SHIPS: "enemy ships",
                ENEMY_BULLETS: "enemy bullets"
            };
            return Constants;
        })();
        core.Constants = Constants;
    })(core = example.core || (example.core = {}));
})(example || (example = {}));
//# sourceMappingURL=Constants.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var components;
    (function (components) {
        var PooledComponent = artemis.PooledComponent;
        var Pooled = artemis.annotations.Pooled;
        var Bounds = (function (_super) {
            __extends(Bounds, _super);
            function Bounds() {
                _super.apply(this, arguments);
            }
            Bounds.prototype.initialize = function (radius) {
                if (radius === void 0) { radius = 0; }
                this.radius = radius;
            };
            Bounds.className = 'Bounds';
            Bounds = __decorate([
                Pooled()
            ], Bounds);
            return Bounds;
        })(PooledComponent);
        components.Bounds = Bounds;
        Bounds.prototype.radius = 0;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=Bounds.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var example;
(function (example) {
    var components;
    (function (components) {
        var Component = artemis.Component;
        var ColorAnimation = (function (_super) {
            __extends(ColorAnimation, _super);
            function ColorAnimation() {
                _super.apply(this, arguments);
            }
            ColorAnimation.prototype.initialize = function (lambda) {
                if (lambda !== undefined) {
                    lambda(this);
                }
            };
            ColorAnimation.className = 'ColorAnimation';
            return ColorAnimation;
        })(Component);
        components.ColorAnimation = ColorAnimation;
        ColorAnimation.prototype.redMin = 0;
        ColorAnimation.prototype.redMax = 0;
        ColorAnimation.prototype.redSpeed = 0;
        ColorAnimation.prototype.redAnimate = false;
        ColorAnimation.prototype.greenMin = 0;
        ColorAnimation.prototype.greenMax = 0;
        ColorAnimation.prototype.greenSpeed = 0;
        ColorAnimation.prototype.greenAnimate = false;
        ColorAnimation.prototype.blueMin = 0;
        ColorAnimation.prototype.blueMax = 0;
        ColorAnimation.prototype.blueSpeed = 0;
        ColorAnimation.prototype.blueAnimate = false;
        ColorAnimation.prototype.alphaMin = 0;
        ColorAnimation.prototype.alphaMax = 0;
        ColorAnimation.prototype.alphaSpeed = 0;
        ColorAnimation.prototype.alphaAnimate = false;
        ColorAnimation.prototype.repeat = false;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=ColorAnimation.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var example;
(function (example) {
    var components;
    (function (components) {
        var Component = artemis.Component;
        var Enemy = (function (_super) {
            __extends(Enemy, _super);
            function Enemy() {
                _super.apply(this, arguments);
            }
            Enemy.className = 'Enemy';
            return Enemy;
        })(Component);
        components.Enemy = Enemy;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=Enemy.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var components;
    (function (components) {
        var PooledComponent = artemis.PooledComponent;
        var Pooled = artemis.annotations.Pooled;
        var Expires = (function (_super) {
            __extends(Expires, _super);
            function Expires() {
                _super.apply(this, arguments);
            }
            Expires.prototype.initialize = function (delay) {
                if (delay === void 0) { delay = 0; }
                this.delay = delay;
            };
            Expires.className = 'Expires';
            Expires = __decorate([
                Pooled()
            ], Expires);
            return Expires;
        })(PooledComponent);
        components.Expires = Expires;
        Expires.prototype.delay = 0;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=Expires.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var example;
(function (example) {
    var components;
    (function (components) {
        var Component = artemis.Component;
        var Health = (function (_super) {
            __extends(Health, _super);
            function Health() {
                _super.apply(this, arguments);
            }
            Health.prototype.initialize = function (health, maximumHealth) {
                if (health === void 0) { health = 0; }
                if (maximumHealth === void 0) { maximumHealth = 0; }
                this.health = health;
                this.maximumHealth = maximumHealth;
            };
            Health.className = 'Health';
            return Health;
        })(Component);
        components.Health = Health;
        Health.prototype.health = 0;
        Health.prototype.maximumHealth = 0;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=Health.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var example;
(function (example) {
    var components;
    (function (components) {
        var Component = artemis.Component;
        var ParallaxStar = (function (_super) {
            __extends(ParallaxStar, _super);
            function ParallaxStar() {
                _super.apply(this, arguments);
            }
            ParallaxStar.className = 'ParallaxStar';
            return ParallaxStar;
        })(Component);
        components.ParallaxStar = ParallaxStar;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=ParallaxStar.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var example;
(function (example) {
    var components;
    (function (components) {
        var Component = artemis.Component;
        var Player = (function (_super) {
            __extends(Player, _super);
            function Player() {
                _super.apply(this, arguments);
            }
            Player.className = 'Player';
            return Player;
        })(Component);
        components.Player = Player;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=Player.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var components;
    (function (components) {
        var PooledComponent = artemis.PooledComponent;
        var Pooled = artemis.annotations.Pooled;
        var Position = (function (_super) {
            __extends(Position, _super);
            function Position() {
                _super.apply(this, arguments);
            }
            Position.prototype.initialize = function (x, y) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                this.x = x;
                this.y = y;
            };
            Position.className = 'Position';
            Position = __decorate([
                Pooled()
            ], Position);
            return Position;
        })(PooledComponent);
        components.Position = Position;
        Position.prototype.x = 0;
        Position.prototype.y = 0;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=Position.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var example;
(function (example) {
    var components;
    (function (components) {
        var Component = artemis.Component;
        var ScaleAnimation = (function (_super) {
            __extends(ScaleAnimation, _super);
            function ScaleAnimation() {
                _super.apply(this, arguments);
            }
            ScaleAnimation.prototype.initialize = function (lambda) {
                if (lambda !== undefined) {
                    lambda(this);
                }
            };
            ScaleAnimation.className = 'ScaleAnimation';
            return ScaleAnimation;
        })(Component);
        components.ScaleAnimation = ScaleAnimation;
        ScaleAnimation.prototype.min = 0;
        ScaleAnimation.prototype.max = 0;
        ScaleAnimation.prototype.speed = 0;
        ScaleAnimation.prototype.repeat = false;
        ScaleAnimation.prototype.active = false;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=ScaleAnimation.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var components;
    (function (components) {
        var PooledComponent = artemis.PooledComponent;
        var Pooled = artemis.annotations.Pooled;
        (function (EFFECT) {
            EFFECT[EFFECT["PEW"] = 0] = "PEW";
            EFFECT[EFFECT["ASPLODE"] = 1] = "ASPLODE";
            EFFECT[EFFECT["SMALLASPLODE"] = 2] = "SMALLASPLODE";
        })(components.EFFECT || (components.EFFECT = {}));
        var EFFECT = components.EFFECT;
        var SoundEffect = (function (_super) {
            __extends(SoundEffect, _super);
            function SoundEffect() {
                _super.apply(this, arguments);
            }
            SoundEffect.prototype.initialize = function (effect) {
                if (effect === void 0) { effect = EFFECT.PEW; }
                this.effect = effect;
            };
            SoundEffect.className = 'SoundEffect';
            SoundEffect = __decorate([
                Pooled()
            ], SoundEffect);
            return SoundEffect;
        })(PooledComponent);
        components.SoundEffect = SoundEffect;
        SoundEffect.prototype.effect = EFFECT.PEW;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=SoundEffect.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var components;
    (function (components) {
        var PooledComponent = artemis.PooledComponent;
        var Pooled = artemis.annotations.Pooled;
        var Point = PIXI.Point;
        (function (Layer) {
            Layer[Layer["DEFAULT"] = 0] = "DEFAULT";
            Layer[Layer["BACKGROUND"] = 1] = "BACKGROUND";
            Layer[Layer["ACTORS_1"] = 2] = "ACTORS_1";
            Layer[Layer["ACTORS_2"] = 3] = "ACTORS_2";
            Layer[Layer["ACTORS_3"] = 4] = "ACTORS_3";
            Layer[Layer["PARTICLES"] = 5] = "PARTICLES";
        })(components.Layer || (components.Layer = {}));
        var Layer = components.Layer;
        var Sprite = (function (_super) {
            __extends(Sprite, _super);
            function Sprite() {
                _super.apply(this, arguments);
            }
            Sprite.prototype.initialize = function (name, color, lambda) {
                this.name_ = name;
                this.sprite_ = new PIXI.Sprite(PIXI.Texture.fromFrame(name + ".png"));
                var scale = 1 / window.devicePixelRatio;
                this.sprite_.scale = new Point(scale, scale);
                this.sprite_.anchor = new Point(0.5, 0.5);
                if (color !== undefined && color !== null) {
                    this.color = color;
                }
                if (lambda !== undefined) {
                    lambda(this);
                }
            };
            Object.defineProperty(Sprite.prototype, "name", {
                get: function () {
                    return this.name_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Sprite.prototype, "scale", {
                get: function () {
                    return this.sprite_.scale;
                },
                set: function (value) {
                    this.sprite_.scale = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Sprite.prototype, "rotation", {
                get: function () {
                    return this.sprite_.rotation;
                },
                set: function (value) {
                    this.sprite_.rotation = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Sprite.prototype, "position", {
                get: function () {
                    return this.sprite_.position;
                },
                set: function (value) {
                    this.sprite_.position = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Sprite.prototype, "color", {
                get: function () {
                    return this.sprite_.tint;
                },
                set: function (value) {
                    this.sprite_.tint = value;
                    //this.sprite_.setColor(cc.color(this.r_, this.g_, this.b_));
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Sprite.prototype, "alpha", {
                get: function () {
                    return this.sprite_.alpha;
                },
                set: function (value) {
                    this.sprite_.alpha = value;
                },
                enumerable: true,
                configurable: true
            });
            Sprite.prototype.addTo = function (layer) {
                layer.addChild(this.sprite_);
            };
            Sprite.prototype.removeFrom = function (layer) {
                layer.removeChild(this.sprite_);
            };
            Sprite.prototype.reset = function () {
                this.sprite_ = null;
            };
            Sprite.className = 'Sprite';
            Sprite = __decorate([
                Pooled()
            ], Sprite);
            return Sprite;
        })(PooledComponent);
        components.Sprite = Sprite;
        Sprite.prototype.layer = Layer.DEFAULT;
        Sprite.prototype.name_ = '';
        Sprite.prototype.sprite_ = null;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=Sprite.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var components;
    (function (components) {
        var PooledComponent = artemis.PooledComponent;
        var Pooled = artemis.annotations.Pooled;
        var Velocity = (function (_super) {
            __extends(Velocity, _super);
            function Velocity() {
                _super.apply(this, arguments);
            }
            Velocity.prototype.initialize = function (vectorX, vectorY) {
                if (vectorX === void 0) { vectorX = 0; }
                if (vectorY === void 0) { vectorY = 0; }
                this.vectorX = vectorX;
                this.vectorY = vectorY;
            };
            Velocity.className = 'Velocity';
            Velocity = __decorate([
                Pooled()
            ], Velocity);
            return Velocity;
        })(PooledComponent);
        components.Velocity = Velocity;
        Velocity.prototype.vectorX = 0;
        Velocity.prototype.vectorY = 0;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=Velocity.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var templates;
    (function (templates) {
        var Point = PIXI.Point;
        var Position = example.components.Position;
        var Sprite = example.components.Sprite;
        var Velocity = example.components.Velocity;
        var Bounds = example.components.Bounds;
        var Health = example.components.Health;
        var GroupManager = artemis.managers.GroupManager;
        var EntitySystem = artemis.EntitySystem;
        var Constants = example.core.Constants;
        var EntityTemplate = artemis.annotations.EntityTemplate;
        var EnemyShipTemplate = (function () {
            function EnemyShipTemplate() {
            }
            EnemyShipTemplate.prototype.buildEntity = function (entity, world, name, layer, health, x, y, velocityX, velocityY, boundsRadius) {
                entity.addComponent(Position, x, y);
                entity.addComponent(Velocity, velocityX, velocityY);
                entity.addComponent(Bounds, boundsRadius);
                entity.addComponent(Health, health, health);
                entity.addComponent(Sprite, name, 0xff008e, function (sprite) {
                    sprite.position = new Point(x * 2, y);
                    sprite.layer = layer;
                    sprite.addTo(EntitySystem.blackBoard.getEntry('sprites'));
                });
                world.getManager(GroupManager).add(entity, Constants.Groups.ENEMY_SHIPS);
                return entity;
            };
            EnemyShipTemplate = __decorate([
                EntityTemplate('enemy')
            ], EnemyShipTemplate);
            return EnemyShipTemplate;
        })();
        templates.EnemyShipTemplate = EnemyShipTemplate;
    })(templates = example.templates || (example.templates = {}));
})(example || (example = {}));
//# sourceMappingURL=EnemyShipTemplate.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var templates;
    (function (templates) {
        var Point = PIXI.Point;
        var Position = example.components.Position;
        var Sprite = example.components.Sprite;
        var Expires = example.components.Expires;
        var SoundEffect = example.components.SoundEffect;
        var ScaleAnimation = example.components.ScaleAnimation;
        var Layer = example.components.Layer;
        var EFFECT = example.components.EFFECT;
        var EntitySystem = artemis.EntitySystem;
        var EntityTemplate = artemis.annotations.EntityTemplate;
        /**
         * Base Explosion Template
         */
        var ExplosionTemplate = (function () {
            function ExplosionTemplate() {
            }
            ExplosionTemplate.prototype.buildEntity = function (entity, world, x, y, scale) {
                entity.addComponent(Position, x, y);
                entity.addComponent(Expires, 0.5);
                entity.addComponent(Sprite, 'explosion', 0xffd80080, function (sprite) {
                    sprite.scale = new Point(scale, scale);
                    sprite.position = new Point(x * 2, y);
                    sprite.layer = Layer.PARTICLES;
                    sprite.addTo(EntitySystem.blackBoard.getEntry('sprites'));
                });
                entity.addComponent(ScaleAnimation, function (scaleAnimation) {
                    scaleAnimation.active = true;
                    scaleAnimation.max = scale;
                    scaleAnimation.min = scale / 100;
                    scaleAnimation.speed = -3.0;
                    scaleAnimation.repeat = false;
                });
                return entity;
            };
            return ExplosionTemplate;
        })();
        /**
         * Small Explosion
         */
        var SmallExplosionTemplate = (function (_super) {
            __extends(SmallExplosionTemplate, _super);
            function SmallExplosionTemplate() {
                _super.apply(this, arguments);
            }
            SmallExplosionTemplate.prototype.buildEntity = function (entity, world, x, y) {
                _super.prototype.buildEntity.call(this, entity, world, x, y, 0.1);
                var sf = new SoundEffect();
                sf.effect = EFFECT.SMALLASPLODE;
                entity.addComponent(sf);
                return entity;
            };
            SmallExplosionTemplate = __decorate([
                EntityTemplate('small')
            ], SmallExplosionTemplate);
            return SmallExplosionTemplate;
        })(ExplosionTemplate);
        templates.SmallExplosionTemplate = SmallExplosionTemplate;
        /**
         * Big Explosion
         */
        var BigExplosionTemplate = (function (_super) {
            __extends(BigExplosionTemplate, _super);
            function BigExplosionTemplate() {
                _super.apply(this, arguments);
            }
            BigExplosionTemplate.prototype.buildEntity = function (entity, world, x, y) {
                _super.prototype.buildEntity.call(this, entity, world, x, y, 0.5);
                var sf = new SoundEffect();
                sf.effect = EFFECT.ASPLODE;
                entity.addComponent(sf);
                return entity;
            };
            BigExplosionTemplate = __decorate([
                EntityTemplate('big')
            ], BigExplosionTemplate);
            return BigExplosionTemplate;
        })(ExplosionTemplate);
        templates.BigExplosionTemplate = BigExplosionTemplate;
    })(templates = example.templates || (example.templates = {}));
})(example || (example = {}));
//# sourceMappingURL=ExplosionTemplate.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var templates;
    (function (templates) {
        var Tau = 2 * Math.PI;
        var Point = PIXI.Point;
        var MathUtils = artemis.utils.MathUtils;
        var Position = example.components.Position;
        var Sprite = example.components.Sprite;
        var Velocity = example.components.Velocity;
        var ColorAnimation = example.components.ColorAnimation;
        var Expires = example.components.Expires;
        var Layer = example.components.Layer;
        var EntitySystem = artemis.EntitySystem;
        var EntityTemplate = artemis.annotations.EntityTemplate;
        var ParticleTemplate = (function () {
            function ParticleTemplate() {
            }
            ParticleTemplate.prototype.buildEntity = function (entity, world, x, y) {
                var radians = Math.random() * Tau; // MathUtils.random(Tau);
                var magnitude = MathUtils.random(200);
                var velocityX = magnitude * Math.cos(radians);
                var velocityY = magnitude * Math.sin(radians);
                entity.addComponent(Position, x, y);
                entity.addComponent(Velocity, velocityX, velocityY);
                entity.addComponent(Expires, 1);
                //0xffd800ff
                entity.addComponent(Sprite, 'particle', 0xffd800ff, function (sprite) {
                    var s = MathUtils.random(0.5, 1);
                    sprite.scale = new Point(s, s);
                    sprite.position = new Point(x * 2, y);
                    sprite.layer = Layer.PARTICLES;
                    sprite.addTo(EntitySystem.blackBoard.getEntry('sprites'));
                });
                entity.addComponent(ColorAnimation, function (colorAnimation) {
                    colorAnimation.alphaAnimate = true;
                    colorAnimation.alphaSpeed = -1;
                    colorAnimation.alphaMin = 0;
                    colorAnimation.alphaMax = 1;
                    colorAnimation.repeat = false;
                });
                return entity;
            };
            ParticleTemplate = __decorate([
                EntityTemplate('particle')
            ], ParticleTemplate);
            return ParticleTemplate;
        })();
        templates.ParticleTemplate = ParticleTemplate;
    })(templates = example.templates || (example.templates = {}));
})(example || (example = {}));
//# sourceMappingURL=ParticleTemplate.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var templates;
    (function (templates) {
        var Point = PIXI.Point;
        var Position = example.components.Position;
        var Sprite = example.components.Sprite;
        var Velocity = example.components.Velocity;
        var Bounds = example.components.Bounds;
        var Expires = example.components.Expires;
        var SoundEffect = example.components.SoundEffect;
        var Layer = example.components.Layer;
        var EFFECT = example.components.EFFECT;
        var GroupManager = artemis.managers.GroupManager;
        var EntitySystem = artemis.EntitySystem;
        var Constants = example.core.Constants;
        var EntityTemplate = artemis.annotations.EntityTemplate;
        var PlayerBulletTemplate = (function () {
            function PlayerBulletTemplate() {
            }
            PlayerBulletTemplate.prototype.buildEntity = function (entity, world, x, y) {
                entity.addComponent(Position, x, y);
                entity.addComponent(Velocity, 0, 800);
                entity.addComponent(Bounds, 5);
                entity.addComponent(Expires, 5);
                entity.addComponent(SoundEffect, EFFECT.PEW);
                entity.addComponent(Sprite, 'bullet', 0xffffff, function (sprite) {
                    sprite.position = new Point(x * 2, y);
                    sprite.layer = Layer.PARTICLES;
                    sprite.addTo(EntitySystem.blackBoard.getEntry('sprites'));
                });
                world.getManager(GroupManager).add(entity, Constants.Groups.PLAYER_BULLETS);
                return entity;
            };
            PlayerBulletTemplate = __decorate([
                EntityTemplate('bullet')
            ], PlayerBulletTemplate);
            return PlayerBulletTemplate;
        })();
        templates.PlayerBulletTemplate = PlayerBulletTemplate;
    })(templates = example.templates || (example.templates = {}));
})(example || (example = {}));
//# sourceMappingURL=PlayerBulletTemplate.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var templates;
    (function (templates) {
        var Point = PIXI.Point;
        var GroupManager = artemis.managers.GroupManager;
        var EntitySystem = artemis.EntitySystem;
        var EntityTemplate = artemis.annotations.EntityTemplate;
        var Position = example.components.Position;
        var Sprite = example.components.Sprite;
        var Velocity = example.components.Velocity;
        var Bounds = example.components.Bounds;
        var Player = example.components.Player;
        var Layer = example.components.Layer;
        var Constants = example.core.Constants;
        var PlayerTemplate = (function () {
            function PlayerTemplate() {
            }
            PlayerTemplate.prototype.buildEntity = function (entity, world) {
                var x = Constants.FRAME_WIDTH / 4;
                var y = 80;
                entity.addComponent(Position, x, y);
                entity.addComponent(Velocity, 0, 0);
                entity.addComponent(Bounds, 43);
                entity.addComponent(Player);
                entity.addComponent(Sprite, 'fighter', 0x5dff81, function (sprite) {
                    sprite.position = new Point(x * 2, y);
                    sprite.layer = Layer.ACTORS_3;
                    sprite.addTo(EntitySystem.blackBoard.getEntry('sprites'));
                });
                world.getManager(GroupManager).add(entity, Constants.Groups.PLAYER_SHIP);
                return entity;
            };
            PlayerTemplate = __decorate([
                EntityTemplate('player')
            ], PlayerTemplate);
            return PlayerTemplate;
        })();
        templates.PlayerTemplate = PlayerTemplate;
    })(templates = example.templates || (example.templates = {}));
})(example || (example = {}));
//# sourceMappingURL=PlayerTemplate.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var templates;
    (function (templates) {
        var Point = PIXI.Point;
        var MathUtils = artemis.utils.MathUtils;
        var Position = example.components.Position;
        var Sprite = example.components.Sprite;
        var Velocity = example.components.Velocity;
        var ParallaxStar = example.components.ParallaxStar;
        var ColorAnimation = example.components.ColorAnimation;
        var Layer = example.components.Layer;
        var EntitySystem = artemis.EntitySystem;
        var Constants = example.core.Constants;
        var EntityTemplate = artemis.annotations.EntityTemplate;
        var StarTemplate = (function () {
            function StarTemplate() {
            }
            StarTemplate.prototype.buildEntity = function (entity, world) {
                var x = MathUtils.nextInt(Constants.FRAME_WIDTH);
                var y = MathUtils.nextInt(Constants.FRAME_HEIGHT);
                entity.addComponent(Position, x, y);
                entity.addComponent(Velocity, 0, MathUtils.random(-10, -60));
                entity.addComponent(ParallaxStar);
                entity.addComponent(Sprite, 'particle', 0xffd800ff, function (sprite) {
                    var s = MathUtils.random(0.5, 1);
                    sprite.scale = new Point(s, s);
                    sprite.position = new Point(x * 2, y);
                    sprite.alpha = MathUtils.nextDouble() * 127;
                    sprite.layer = Layer.BACKGROUND;
                    sprite.addTo(EntitySystem.blackBoard.getEntry('sprites'));
                });
                entity.addComponent(ColorAnimation, function (colorAnimation) {
                    colorAnimation.alphaAnimate = true;
                    colorAnimation.repeat = true;
                    colorAnimation.alphaSpeed = MathUtils.random(0.2, 0.7);
                    colorAnimation.alphaMin = 0;
                    colorAnimation.alphaMax = 255;
                });
                return entity;
            };
            StarTemplate = __decorate([
                EntityTemplate('star')
            ], StarTemplate);
            return StarTemplate;
        })();
        templates.StarTemplate = StarTemplate;
    })(templates = example.templates || (example.templates = {}));
})(example || (example = {}));
//# sourceMappingURL=StarTemplate.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var systems;
    (function (systems) {
        var Bag = artemis.utils.Bag;
        var Bounds = example.components.Bounds;
        var Expires = example.components.Expires;
        var Health = example.components.Health;
        var Position = example.components.Position;
        var Constants = example.core.Constants;
        var Mapper = artemis.annotations.Mapper;
        var EntitySystem = artemis.EntitySystem;
        var Aspect = artemis.Aspect;
        var GroupManager = artemis.managers.GroupManager;
        var CollisionSystem = (function (_super) {
            __extends(CollisionSystem, _super);
            function CollisionSystem(sprites) {
                _super.call(this, Aspect.getAspectForAll(Position, Bounds));
                this.sprites = sprites;
            }
            CollisionSystem.prototype.initialize = function () {
                var _this = this;
                this.collisionPairs = new Bag();
                this.collisionPairs.add(new CollisionPair(this, Constants.Groups.PLAYER_BULLETS, Constants.Groups.ENEMY_SHIPS, {
                    handleCollision: function (bullet, ship) {
                        var bp = _this.pm.get(bullet);
                        var health = _this.hm.get(ship);
                        var position = _this.pm.get(ship);
                        _this.world.createEntityFromTemplate('small', bp.x, bp.y).addToWorld();
                        for (var i = 0; 4 > i; i++) {
                            _this.world.createEntityFromTemplate('particle', bp.x, bp.y).addToWorld();
                        }
                        bullet.deleteFromWorld();
                        health.health -= 1;
                        if (health.health < 0) {
                            health.health = 0;
                            ship.deleteFromWorld();
                            _this.world.createEntityFromTemplate('big', position.x, position.y).addToWorld();
                        }
                    }
                }));
            };
            CollisionSystem.prototype.processEntities = function (entities) {
                //console.log('this.collisionPairs.size()', this.collisionPairs.size());
                for (var i = 0; this.collisionPairs.size() > i; i++) {
                    this.collisionPairs.get(i).checkForCollisions();
                }
            };
            CollisionSystem.prototype.checkProcessing = function () {
                return true;
            };
            __decorate([
                Mapper(Position)
            ], CollisionSystem.prototype, "pm");
            __decorate([
                Mapper(Bounds)
            ], CollisionSystem.prototype, "bm");
            __decorate([
                Mapper(Health)
            ], CollisionSystem.prototype, "hm");
            __decorate([
                Mapper(Expires)
            ], CollisionSystem.prototype, "ex");
            return CollisionSystem;
        })(EntitySystem);
        systems.CollisionSystem = CollisionSystem;
        var CollisionPair = (function () {
            function CollisionPair(cs, group1, group2, handler) {
                this.groupEntitiesA = cs.world.getManager(GroupManager).getEntities(group1);
                this.groupEntitiesB = cs.world.getManager(GroupManager).getEntities(group2);
                this.handler = handler;
                this.cs = cs;
            }
            CollisionPair.prototype.checkForCollisions = function () {
                for (var a = 0; this.groupEntitiesA.size() > a; a++) {
                    var entityA = this.groupEntitiesA.get(a);
                    for (var b = 0; this.groupEntitiesB.size() > b; b++) {
                        var entityB = this.groupEntitiesB.get(b);
                        if (this.collisionExists(entityA, entityB)) {
                            this.handler.handleCollision(entityA, entityB);
                        }
                    }
                }
            };
            CollisionPair.prototype.collisionExists = function (e1, e2) {
                if (e1 === null || e2 === null)
                    return false;
                //NPE!!!
                var p1 = this.cs.pm.get(e1);
                var p2 = this.cs.pm.get(e2);
                var b1 = this.cs.bm.get(e1);
                var b2 = this.cs.bm.get(e2);
                var a = p1.x - p2.x;
                var b = p1.y - p2.y;
                return Math.sqrt(a * a + b * b) - b1.radius < b2.radius;
                //return Utils.distance(p1.x, p1.y, p2.x, p2.y)-b1.radius < b2.radius;
            };
            return CollisionPair;
        })();
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=CollisionSystem.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var systems;
    (function (systems) {
        var ColorAnimation = example.components.ColorAnimation;
        var Sprite = example.components.Sprite;
        var Mapper = artemis.annotations.Mapper;
        var EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
        var Aspect = artemis.Aspect;
        var ColorAnimationSystem = (function (_super) {
            __extends(ColorAnimationSystem, _super);
            function ColorAnimationSystem() {
                _super.call(this, Aspect.getAspectForAll(ColorAnimation, Sprite));
            }
            ColorAnimationSystem.prototype.processEach = function (e) {
                var c = this.cam.get(e);
                var sprite = this.sm.get(e);
                if (c.alphaAnimate) {
                    sprite.alpha += c.alphaSpeed * this.world.delta;
                    if (sprite.alpha > c.alphaMax || sprite.alpha < c.alphaMin) {
                        if (c.repeat) {
                            c.alphaSpeed = -c.alphaSpeed;
                        }
                        else {
                            c.alphaAnimate = false;
                        }
                    }
                }
            };
            __decorate([
                Mapper(ColorAnimation)
            ], ColorAnimationSystem.prototype, "cam");
            __decorate([
                Mapper(Sprite)
            ], ColorAnimationSystem.prototype, "sm");
            return ColorAnimationSystem;
        })(EntityProcessingSystem);
        systems.ColorAnimationSystem = ColorAnimationSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=ColorAnimationSystem.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var example;
(function (example) {
    var systems;
    (function (systems) {
        var MathUtils = artemis.utils.MathUtils;
        var Layer = example.components.Layer;
        var Constants = example.core.Constants;
        var VoidEntitySystem = artemis.systems.VoidEntitySystem;
        var Timer = artemis.utils.Timer;
        var EntitySpawningTimerSystem = (function (_super) {
            __extends(EntitySpawningTimerSystem, _super);
            function EntitySpawningTimerSystem() {
                var _this = this;
                _super.call(this);
                this.timer1 = new Timer(2, true);
                this.timer1.execute = function () {
                    _this.world.createEntityFromTemplate('enemy', "enemy1", Layer.ACTORS_3, 10, MathUtils.nextInt(Constants.FRAME_WIDTH / 2), Constants.FRAME_HEIGHT / 2 - 200, 0, -40, 20).addToWorld();
                };
                this.timer2 = new Timer(6, true);
                this.timer2.execute = function () {
                    _this.world.createEntityFromTemplate('enemy', "enemy2", Layer.ACTORS_2, 20, MathUtils.nextInt(Constants.FRAME_WIDTH / 2), Constants.FRAME_HEIGHT / 2 - 100, 0, -30, 40).addToWorld();
                };
                this.timer3 = new Timer(12, true);
                this.timer3.execute = function () {
                    _this.world.createEntityFromTemplate('enemy', "enemy3", Layer.ACTORS_1, 60, MathUtils.nextInt(Constants.FRAME_WIDTH / 2), Constants.FRAME_HEIGHT / 2 - 50, 0, -20, 70).addToWorld();
                };
            }
            EntitySpawningTimerSystem.prototype.processSystem = function () {
                this.timer1.update(this.world.delta);
                this.timer2.update(this.world.delta);
                this.timer3.update(this.world.delta);
            };
            return EntitySpawningTimerSystem;
        })(VoidEntitySystem);
        systems.EntitySpawningTimerSystem = EntitySpawningTimerSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=EntitySpawningTimerSystem.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var systems;
    (function (systems) {
        var Expires = example.components.Expires;
        var Aspect = artemis.Aspect;
        var DelayedEntityProcessingSystem = artemis.systems.DelayedEntityProcessingSystem;
        var Mapper = artemis.annotations.Mapper;
        var ExpiringSystem = (function (_super) {
            __extends(ExpiringSystem, _super);
            function ExpiringSystem() {
                _super.call(this, Aspect.getAspectForAll(Expires));
            }
            ExpiringSystem.prototype.processDelta = function (e, accumulatedDelta) {
                var expires = this.em.get(e);
                expires.delay -= accumulatedDelta;
            };
            ExpiringSystem.prototype.processExpired = function (e) {
                e.deleteFromWorld();
            };
            ExpiringSystem.prototype.getRemainingDelay = function (e) {
                var expires = this.em.get(e);
                return expires.delay;
            };
            __decorate([
                Mapper(Expires)
            ], ExpiringSystem.prototype, "em");
            return ExpiringSystem;
        })(DelayedEntityProcessingSystem);
        systems.ExpiringSystem = ExpiringSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=ExpiringSystem.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var systems;
    (function (systems) {
        var BitmapText = PIXI.extras.BitmapText;
        var Point = PIXI.Point;
        var Bounds = example.components.Bounds;
        var Health = example.components.Health;
        var Position = example.components.Position;
        var Aspect = artemis.Aspect;
        var EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
        var Mapper = artemis.annotations.Mapper;
        var HealthRenderSystem = (function (_super) {
            __extends(HealthRenderSystem, _super);
            function HealthRenderSystem(sprites) {
                _super.call(this, Aspect.getAspectForAll(Position, Health));
                this.sprites = sprites;
                this.texts = {};
            }
            HealthRenderSystem.prototype.inserted = function (e) {
                var text = new BitmapText('100%', { font: '20px Radio Stars' });
                var scale = 1 / window.devicePixelRatio;
                text.scale = new Point(scale, scale);
                this.sprites.addChild(text);
                this.texts[e.uuid] = text;
            };
            HealthRenderSystem.prototype.removed = function (e) {
                this.sprites.removeChild(this.texts[e.uuid]);
                this.texts[e.uuid] = null;
                delete this.texts[e.uuid];
            };
            HealthRenderSystem.prototype.processEach = function (e) {
                // update the text element on the sprite
                if (this.texts[e.uuid]) {
                    var position = this.pm.get(e);
                    var health = this.hm.get(e);
                    var bounds = this.bm.get(e);
                    var text = this.texts[e.uuid];
                    var percentage = Math.round(health.health / health.maximumHealth * 100);
                    text.position = new PIXI.Point(position.x * 2, position.y);
                    text.text = percentage + "%";
                }
            };
            __decorate([
                Mapper(Position)
            ], HealthRenderSystem.prototype, "pm");
            __decorate([
                Mapper(Health)
            ], HealthRenderSystem.prototype, "hm");
            __decorate([
                Mapper(Bounds)
            ], HealthRenderSystem.prototype, "bm");
            return HealthRenderSystem;
        })(EntityProcessingSystem);
        systems.HealthRenderSystem = HealthRenderSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=HealthRenderSystem.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var systems;
    (function (systems) {
        var Position = example.components.Position;
        var Sprite = example.components.Sprite;
        var VoidEntitySystem = artemis.systems.VoidEntitySystem;
        var Mapper = artemis.annotations.Mapper;
        var BitmapText = PIXI.extras.BitmapText;
        var Point = PIXI.Point;
        var HudRenderSystem = (function (_super) {
            __extends(HudRenderSystem, _super);
            function HudRenderSystem(sprites) {
                _super.call(this);
                this.sprites = sprites;
                this.startTime = 0;
                this.frameNumber = 0;
            }
            HudRenderSystem.prototype.initialize = function () {
                var font = { font: '20px Radio Stars', align: 'left' };
                this.framesPerSecond = new BitmapText('FPS: 60', font);
                this.activeEntities = new BitmapText('Active entities: ', font);
                this.totalCreated = new BitmapText('Total created: ', font);
                this.totalDeleted = new BitmapText('Total deleted: ', font);
                var scale = 1 / window.devicePixelRatio;
                this.framesPerSecond.scale = new Point(scale, scale);
                this.activeEntities.scale = new Point(scale, scale);
                this.totalCreated.scale = new Point(scale, scale);
                this.totalDeleted.scale = new Point(scale, scale);
                this.framesPerSecond.position = new Point(0, 20);
                this.activeEntities.position = new Point(0, 40);
                this.totalCreated.position = new Point(0, 60);
                this.totalDeleted.position = new Point(0, 80);
                this.sprites.addChild(this.framesPerSecond);
                this.sprites.addChild(this.activeEntities);
                this.sprites.addChild(this.totalCreated);
                this.sprites.addChild(this.totalDeleted);
            };
            HudRenderSystem.prototype.getFramesPerSecond = function () {
                var time = performance.now();
                var delta = (time - this.startTime) / 1000;
                var result = ~~(++this.frameNumber / delta);
                if (delta > 1) {
                    this.startTime = time;
                    this.frameNumber = 0;
                }
                return result;
            };
            HudRenderSystem.prototype.processSystem = function () {
                this.framesPerSecond.text = 'FPS: ' + this.getFramesPerSecond();
                this.activeEntities.text = 'Active entities: ' + this.world.getEntityManager().getActiveEntityCount();
                this.totalCreated.text = 'Total created: ' + this.world.getEntityManager().getTotalCreated();
                this.totalDeleted.text = 'Total deleted: ' + this.world.getEntityManager().getTotalDeleted();
            };
            __decorate([
                Mapper(Position)
            ], HudRenderSystem.prototype, "pm");
            __decorate([
                Mapper(Sprite)
            ], HudRenderSystem.prototype, "sm");
            return HudRenderSystem;
        })(VoidEntitySystem);
        systems.HudRenderSystem = HudRenderSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=HudRenderSystem.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var systems;
    (function (systems) {
        var Position = example.components.Position;
        var Velocity = example.components.Velocity;
        var Aspect = artemis.Aspect;
        var EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
        var Mapper = artemis.annotations.Mapper;
        var MovementSystem = (function (_super) {
            __extends(MovementSystem, _super);
            function MovementSystem() {
                _super.call(this, Aspect.getAspectForAll(Position, Velocity));
            }
            MovementSystem.prototype.processEach = function (e) {
                var position = this.pm.get(e);
                var velocity = this.vm.get(e);
                position.x += velocity.vectorX * this.world.delta;
                position.y -= velocity.vectorY * this.world.delta;
            };
            __decorate([
                Mapper(Position)
            ], MovementSystem.prototype, "pm");
            __decorate([
                Mapper(Velocity)
            ], MovementSystem.prototype, "vm");
            return MovementSystem;
        })(EntityProcessingSystem);
        systems.MovementSystem = MovementSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=MovementSystem.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var systems;
    (function (systems) {
        var ParallaxStar = example.components.ParallaxStar;
        var Position = example.components.Position;
        var Constants = example.core.Constants;
        var Aspect = artemis.Aspect;
        var IntervalEntityProcessingSystem = artemis.systems.IntervalEntityProcessingSystem;
        var Mapper = artemis.annotations.Mapper;
        var ParallaxStarRepeatingSystem = (function (_super) {
            __extends(ParallaxStarRepeatingSystem, _super);
            function ParallaxStarRepeatingSystem() {
                _super.call(this, Aspect.getAspectForAll(ParallaxStar, Position), 1);
            }
            ParallaxStarRepeatingSystem.prototype.processEach = function (e) {
                var position = this.pm.get(e);
                if (position.y >= Constants.FRAME_HEIGHT) {
                    position.y = 0;
                }
            };
            __decorate([
                Mapper(Position)
            ], ParallaxStarRepeatingSystem.prototype, "pm");
            return ParallaxStarRepeatingSystem;
        })(IntervalEntityProcessingSystem);
        systems.ParallaxStarRepeatingSystem = ParallaxStarRepeatingSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=ParallaxStarRepeatingSystem.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var systems;
    (function (systems) {
        var Player = example.components.Player;
        var Position = example.components.Position;
        var Velocity = example.components.Velocity;
        var Aspect = artemis.Aspect;
        var Mapper = artemis.annotations.Mapper;
        var EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
        var PlayerInputSystem = (function (_super) {
            __extends(PlayerInputSystem, _super);
            function PlayerInputSystem(sprites) {
                var _this = this;
                _super.call(this, Aspect.getAspectForAll(Position, Velocity, Player));
                this.sprites = sprites;
                this.timeToFire = 0;
                this.onTouchStart = function (event) {
                    event = event.changedTouches ? event.changedTouches[0] : event;
                    try {
                        if (document.documentElement['requestFullscreen']) {
                            document.documentElement['requestFullscreen']();
                        }
                        else if (document.documentElement['mozRequestFullScreen']) {
                            document.documentElement['mozRequestFullScreen']();
                        }
                        else if (document.documentElement['webkitRequestFullscreen']) {
                            document.documentElement['webkitRequestFullscreen']();
                        }
                        else if (document.documentElement['msRequestFullscreen']) {
                            document.documentElement['msRequestFullscreen']();
                        }
                    }
                    catch (e) { }
                    _this.shoot = true;
                    _this.mouseVector = {
                        x: parseInt(event.clientX),
                        y: parseInt(event.clientY)
                    };
                    return true;
                };
                this.onTouchMove = function (event) {
                    event = event.changedTouches ? event.changedTouches[0] : event;
                    //this.shoot = true;
                    _this.mouseVector = {
                        x: parseInt(event.clientX),
                        y: parseInt(event.clientY)
                    };
                    return true;
                };
                this.onTouchEnd = function (event) {
                    _this.shoot = false;
                };
            }
            PlayerInputSystem.prototype.initialize = function () {
                document.addEventListener('touchstart', this.onTouchStart, true);
                document.addEventListener('touchmove', this.onTouchMove, true);
                document.addEventListener('touchend', this.onTouchEnd, true);
                document.addEventListener('mousedown', this.onTouchStart, true);
                document.addEventListener('mousemove', this.onTouchMove, true);
                document.addEventListener('mouseup', this.onTouchEnd, true);
            };
            PlayerInputSystem.prototype.processEach = function (e) {
                if (this.mouseVector === undefined)
                    return;
                var position = this.pm.get(e);
                var velocity = this.vm.get(e);
                var destinationX = this.mouseVector.x;
                var destinationY = this.mouseVector.y;
                if (destinationX === undefined || destinationY === undefined)
                    return;
                position.x = this.mouseVector.x / 2;
                //position.y = Constants.FRAME_HEIGHT-this.mouseVector.y;
                position.y = this.mouseVector.y;
                if (this.shoot) {
                    if (this.timeToFire <= 0) {
                        this.world.createEntityFromTemplate('bullet', position.x - 27, position.y + 2).addToWorld();
                        this.world.createEntityFromTemplate('bullet', position.x + 27, position.y + 2).addToWorld();
                        this.timeToFire = PlayerInputSystem.FireRate;
                    }
                }
                if (this.timeToFire > 0) {
                    this.timeToFire -= this.world.delta;
                    if (this.timeToFire < 0) {
                        this.timeToFire = 0;
                    }
                }
            };
            PlayerInputSystem.FireRate = 0.1;
            __decorate([
                Mapper(Position)
            ], PlayerInputSystem.prototype, "pm");
            __decorate([
                Mapper(Velocity)
            ], PlayerInputSystem.prototype, "vm");
            return PlayerInputSystem;
        })(EntityProcessingSystem);
        systems.PlayerInputSystem = PlayerInputSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=PlayerInputSystem.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var systems;
    (function (systems) {
        var Bounds = example.components.Bounds;
        var Health = example.components.Health;
        var Position = example.components.Position;
        var Velocity = example.components.Velocity;
        var Constants = example.core.Constants;
        var Aspect = artemis.Aspect;
        var IntervalEntityProcessingSystem = artemis.systems.IntervalEntityProcessingSystem;
        var Mapper = artemis.annotations.Mapper;
        var RemoveOffscreenShipsSystem = (function (_super) {
            __extends(RemoveOffscreenShipsSystem, _super);
            function RemoveOffscreenShipsSystem() {
                _super.call(this, Aspect.getAspectForAll(Velocity, Position, Health, Bounds), 5);
            }
            RemoveOffscreenShipsSystem.prototype.processEach = function (e) {
                var position = this.pm.get(e);
                var bounds = this.bm.get(e);
                if (position.y > Constants.FRAME_HEIGHT - bounds.radius) {
                    e.deleteFromWorld();
                }
            };
            __decorate([
                Mapper(Position)
            ], RemoveOffscreenShipsSystem.prototype, "pm");
            __decorate([
                Mapper(Bounds)
            ], RemoveOffscreenShipsSystem.prototype, "bm");
            return RemoveOffscreenShipsSystem;
        })(IntervalEntityProcessingSystem);
        systems.RemoveOffscreenShipsSystem = RemoveOffscreenShipsSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=RemoveOffscreenShipsSystem.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var systems;
    (function (systems) {
        var ScaleAnimation = example.components.ScaleAnimation;
        var Sprite = example.components.Sprite;
        var Aspect = artemis.Aspect;
        var EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
        var Mapper = artemis.annotations.Mapper;
        var ScaleAnimationSystem = (function (_super) {
            __extends(ScaleAnimationSystem, _super);
            //@SuppressWarnings("unchecked")
            function ScaleAnimationSystem() {
                _super.call(this, Aspect.getAspectForAll(ScaleAnimation));
            }
            ScaleAnimationSystem.prototype.processEach = function (e) {
                var scaleAnimation = this.sa.get(e);
                if (scaleAnimation.active) {
                    var sprite = this.sm.get(e);
                    sprite.scale.x += scaleAnimation.speed * this.world.delta;
                    sprite.scale.y = sprite.scale.x;
                    if (sprite.scale.x > scaleAnimation.max) {
                        sprite.scale.x = scaleAnimation.max;
                        scaleAnimation.active = false;
                    }
                    else if (sprite.scale.x < scaleAnimation.min) {
                        sprite.scale.x = scaleAnimation.min;
                        scaleAnimation.active = false;
                    }
                }
            };
            __decorate([
                Mapper(ScaleAnimation)
            ], ScaleAnimationSystem.prototype, "sa");
            __decorate([
                Mapper(Sprite)
            ], ScaleAnimationSystem.prototype, "sm");
            return ScaleAnimationSystem;
        })(EntityProcessingSystem);
        systems.ScaleAnimationSystem = ScaleAnimationSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=ScaleAnimationSystem.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var systems;
    (function (systems) {
        var SoundEffect = example.components.SoundEffect;
        var EFFECT = example.components.EFFECT;
        var Aspect = artemis.Aspect;
        var EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
        var Mapper = artemis.annotations.Mapper;
        // import  = badlogic.gdx.Gdx;
        // import  = badlogic.gdx.audio.Sound;
        var SoundEffectSystem = (function (_super) {
            __extends(SoundEffectSystem, _super);
            //@SuppressWarnings("unchecked")
            function SoundEffectSystem() {
                _super.call(this, Aspect.getAspectForAll(SoundEffect));
            }
            // pew:Sound = Gdx.audio.newSound(Gdx.files.internal("sounds/pew.wav"));
            // asplode:Sound = Gdx.audio.newSound(Gdx.files.internal("sounds/asplode.wav"));
            // smallasplode:Sound = Gdx.audio.newSound(Gdx.files.internal("sounds/smallasplode.wav"));
            SoundEffectSystem.prototype.initialize = function () {
            };
            SoundEffectSystem.prototype.processEach = function (e) {
                var soundEffect = this.se.get(e);
                switch (soundEffect.effect) {
                    case EFFECT.PEW:
                        //pew.play();
                        break;
                    case EFFECT.ASPLODE:
                        //asplode.play();
                        break;
                    case EFFECT.SMALLASPLODE:
                        //smallasplode.play();
                        break;
                    default:
                        break;
                }
                e.removeComponentInstance(soundEffect);
                e.changedInWorld();
            };
            __decorate([
                Mapper(SoundEffect)
            ], SoundEffectSystem.prototype, "se");
            return SoundEffectSystem;
        })(EntityProcessingSystem);
        systems.SoundEffectSystem = SoundEffectSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=SoundEffectSystem.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var example;
(function (example) {
    var systems;
    (function (systems) {
        var HashMap = artemis.utils.HashMap;
        var Position = example.components.Position;
        var Sprite = example.components.Sprite;
        var Aspect = artemis.Aspect;
        var EntitySystem = artemis.EntitySystem;
        var Bag = artemis.utils.Bag;
        var Mapper = artemis.annotations.Mapper;
        var SpriteRenderSystem = (function (_super) {
            __extends(SpriteRenderSystem, _super);
            function SpriteRenderSystem(sprites, resources) {
                _super.call(this, Aspect.getAspectForAll(Position, Sprite));
                this.sprites = sprites;
                this.resources = resources;
            }
            SpriteRenderSystem.prototype.initialize = function () {
                var textureAtlas = this.resources['res/images.json'].data; //.frames;
                this.regions = new HashMap();
                for (var name in textureAtlas.frames) {
                    var r = textureAtlas.frames[name];
                    this.regions.put(name, r);
                }
                this.regionsByEntity = new Bag();
                this.sortedEntities = new Array();
            };
            SpriteRenderSystem.prototype.checkProcessing = function () {
                return true;
            };
            SpriteRenderSystem.prototype.processEntities = function (entities) {
                for (var i = 0; this.sortedEntities.length > i; i++) {
                    this.processEach(this.sortedEntities[i]);
                }
            };
            SpriteRenderSystem.prototype.processEach = function (e) {
                if (this.pm.has(e)) {
                    var position = this.pm.getSafe(e);
                    var sprite = this.sm.get(e);
                    sprite.position = new PIXI.Point(position.x * 2, position.y);
                }
            };
            SpriteRenderSystem.prototype.inserted = function (e) {
                var _this = this;
                var sprite = this.sm.get(e);
                this.regionsByEntity.set(e.getId(), this.regions.get(sprite.name));
                // sortedEntities.add(e);
                this.sortedEntities.push(e);
                this.sortedEntities.sort(function (e1, e2) {
                    var s1 = _this.sm.get(e1);
                    var s2 = _this.sm.get(e2);
                    return s1.layer - s2.layer;
                });
            };
            SpriteRenderSystem.prototype.removed = function (e) {
                var c = e.getComponentByType(Sprite);
                c.removeFrom(this.sprites);
                this.regionsByEntity.set(e.getId(), null);
                var index = this.sortedEntities.indexOf(e);
                if (index !== -1) {
                    this.sortedEntities.splice(index, 1);
                }
            };
            __decorate([
                Mapper(Position)
            ], SpriteRenderSystem.prototype, "pm");
            __decorate([
                Mapper(Sprite)
            ], SpriteRenderSystem.prototype, "sm");
            return SpriteRenderSystem;
        })(EntitySystem);
        systems.SpriteRenderSystem = SpriteRenderSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
/**
 * TODO: sprites not layered in correct order. Use this:>
 *
 * @see https://github.com/pixijs/pixi.js/issues/300
 *
 * var mapContainer = new PIXI.DisplayObjectContainer(),
 unitsContainer = new PIXI.DisplayObjectContainer(),
 menuContainer = new PIXI.DisplayObjectContainer();

 mapContainer.zIndex = 5;
 unitsContainer.zIndex = 10;
 menuContainer.zIndex = 20;

 /* adding children, no matter in which order * /
stage.addChild(mapContainer);
stage.addChild(menuContainer);
stage.addChild(unitsContainer);

/* call this function whenever you added a new layer/container * /
stage.updateLayersOrder = function () {
  stage.children.sort(function(a,b) {
    a.zIndex = a.zIndex || 0;
    b.zIndex = b.zIndex || 0;
    return b.zIndex - a.zIndex
  });
};

stage.updateLayersOrder();
 */ 
//# sourceMappingURL=SpriteRenderSystem.js.map
var example;
(function (example) {
    var core;
    (function (core) {
        var CollisionSystem = example.systems.CollisionSystem;
        var ColorAnimationSystem = example.systems.ColorAnimationSystem;
        var EntitySpawningTimerSystem = example.systems.EntitySpawningTimerSystem;
        var ExpiringSystem = example.systems.ExpiringSystem;
        var HealthRenderSystem = example.systems.HealthRenderSystem;
        var HudRenderSystem = example.systems.HudRenderSystem;
        var MovementSystem = example.systems.MovementSystem;
        var ParallaxStarRepeatingSystem = example.systems.ParallaxStarRepeatingSystem;
        var PlayerInputSystem = example.systems.PlayerInputSystem;
        var RemoveOffscreenShipsSystem = example.systems.RemoveOffscreenShipsSystem;
        var ScaleAnimationSystem = example.systems.ScaleAnimationSystem;
        var SpriteRenderSystem = example.systems.SpriteRenderSystem;
        var GroupManager = artemis.managers.GroupManager;
        var EntitySystem = artemis.EntitySystem;
        var GameScreen = (function () {
            function GameScreen(sprites, resources) {
                EntitySystem.blackBoard.setEntry('sprites', sprites);
                var world = this.world = new artemis.World();
                world.setManager(new GroupManager());
                world.setSystem(new MovementSystem());
                world.setSystem(new PlayerInputSystem(sprites));
                //world.setSystem(new SoundEffectSystem());
                world.setSystem(new CollisionSystem(sprites));
                world.setSystem(new ExpiringSystem());
                world.setSystem(new EntitySpawningTimerSystem());
                world.setSystem(new ParallaxStarRepeatingSystem());
                world.setSystem(new ColorAnimationSystem());
                world.setSystem(new ScaleAnimationSystem());
                world.setSystem(new RemoveOffscreenShipsSystem());
                this.spriteRenderSystem = world.setSystem(new SpriteRenderSystem(sprites, resources), true);
                this.healthRenderSystem = world.setSystem(new HealthRenderSystem(sprites), true);
                this.hudRenderSystem = world.setSystem(new HudRenderSystem(sprites), true);
                world.initialize();
                world.createEntityFromTemplate('player').addToWorld();
                for (var i = 0; 500 > i; i++) {
                    world.createEntityFromTemplate('star').addToWorld();
                }
            }
            GameScreen.prototype.render = function (delta) {
                this.world.setDelta(delta);
                this.world.process();
                this.spriteRenderSystem.process();
                this.healthRenderSystem.process();
                this.hudRenderSystem.process();
            };
            return GameScreen;
        })();
        core.GameScreen = GameScreen;
    })(core = example.core || (example.core = {}));
})(example || (example = {}));
//# sourceMappingURL=GameScreen.js.map
var example;
(function (example) {
    var core;
    (function (core) {
        var Container = PIXI.Container;
        var GameScreen = example.core.GameScreen;
        var Constants = example.core.Constants;
        var SpaceshipWarrior = (function () {
            /**
             * Create the game instance
             * @param resources
             */
            function SpaceshipWarrior(resources) {
                var _this = this;
                this.delta = 0;
                this.previousTime = 0;
                /**
                 * Game Loop
                 * @param time
                 */
                this.update = function (time) {
                    _this.delta = _this.previousTime || time;
                    _this.previousTime = time;
                    _this.gameScreen.render((time - _this.delta) * 0.001);
                    _this.renderer.render(_this.sprites);
                    requestAnimationFrame(_this.update);
                };
                /**
                 * Resize window
                 */
                this.resize = function () {
                    var height = window.innerHeight;
                    var width = window.innerWidth;
                    _this.renderer.resize(width, height);
                };
                this.sprites = new Container();
                this.renderer = PIXI.autoDetectRenderer(Constants.FRAME_WIDTH, Constants.FRAME_HEIGHT, { backgroundColor: 0x000000 });
                this.renderer.view.style.position = "absolute";
                document.body.appendChild(this.renderer.view);
                window.addEventListener('resize', this.resize, true);
                window.onorientationchange = this.resize;
                this.gameScreen = new GameScreen(this.sprites, resources);
                requestAnimationFrame(this.update);
            }
            /**
             * Load assets and start
             */
            SpaceshipWarrior.main = function () {
                for (var asset in SpaceshipWarrior.assets) {
                    PIXI.loader.add(SpaceshipWarrior.assets[asset]);
                }
                PIXI.loader.load(function (loader, resources) { return new SpaceshipWarrior(resources); });
            };
            SpaceshipWarrior.assets = [
                'res/images.json',
                'res/fonts/normal.fnt',
                'res/fonts/hud.fnt',
                'res/sounds/asplode.wav',
                'res/sounds/pew.wav',
                'res/sounds/smallasplode.wav'
            ];
            return SpaceshipWarrior;
        })();
        core.SpaceshipWarrior = SpaceshipWarrior;
    })(core = example.core || (example.core = {}));
})(example || (example = {}));
//# sourceMappingURL=SpaceshipWarrior.js.map