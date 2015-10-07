module example.components {

  import Component = artemis.Component;
  import PooledComponent = artemis.PooledComponent;
  import Pooled = artemis.annotations.Pooled;

  @Pooled()
  export class Gui extends PooledComponent {
    public static className = 'Gui';

    public initialize(gui?) {
      this.gui = gui;
    }

    public gui;

  }
  Gui.prototype.gui = null;
}

