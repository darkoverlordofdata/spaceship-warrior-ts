/**
 * Parallax Stars GL Shader
 *
 * @see http://glslsandbox.com/e#21149.2
 */
module example.core {


  export class StarField extends PIXI.AbstractFilter {

    constructor(source) {
      super(null, source, {
        time: {type: "f", value: performance.now()},
        resolution: {type: "2f", value: [window.innerHeight, window.innerWidth]}
      });
    }

  }
}

