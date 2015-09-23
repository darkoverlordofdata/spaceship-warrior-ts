/**
 * Parallax Stars GL Shader
 *
 * @see http://glslsandbox.com/e#21149.2
 */
module example.core {


  export class StarField extends PIXI.AbstractFilter {

    constructor(source) {
      super(null, source, {
        time: {type: "f", value: 1.0},
        resolution: {type: "2f", value: new Float32Array([0.0, 0.0])}
      });
    }

  }
}

