module example.components {

  import Component = artemis.Component;
  import PooledComponent = artemis.PooledComponent;
  import Pooled = artemis.annotations.Pooled;

  @Pooled()
  export class Background extends PooledComponent {
    public static className = 'Background';

    public initialize(filter:PIXI.AbstractFilter=null) {
      this.filter = filter;
    }

    public filter:PIXI.AbstractFilter;

  }
  Background.prototype.filter = null;
}

