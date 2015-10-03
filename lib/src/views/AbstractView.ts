module example.views {

  import Game = example.core.Game;
  import Constants = example.core.Constants;

  export class AbstractView {

    public get visible():boolean {
      return this.view.visible;
    }

    public set visible(value:boolean) {
      this.view.visible = value;
    }


    public view;
    constructor(protected game:Game, options={}) {
      for (var k in options) {
        this[k] = options[k];
      }
      this.view = EZGUI.create(this, Constants.theme);
      this.initialize();
    }

    protected initialize() {}
 }
}