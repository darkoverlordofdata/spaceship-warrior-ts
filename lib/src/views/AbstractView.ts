/**
 * views/AbstractView.ts
 *
 * Base class for Views
 *
 */
module example.views {

  import Game = example.core.Game;
  import Constants = example.core.Constants;
  import Window = EZGUI.Component.Window;

  export class AbstractView {

    protected _view;
    constructor(protected game:Game, protected options={}) {
      this._view = EZGUI.create(this.options, Constants.theme);
      this.initialize();
    }


    public get view():Window {
      return this._view;
    }

    public get visible():boolean {
      return this._view.visible;
    }

    public set visible(value:boolean) {
      this._view.visible = value;
    }

    protected initialize() {}

 }
}