import {ContentChildren, Directive, QueryList} from '@angular/core';
import { TabItemDirective } from './tab-item.directive';

@Directive({
  selector: 'tabs-items'
})
export class TabsItemsDirective {
  @ContentChildren(TabItemDirective, {descendants: true})
  public items: QueryList<TabItemDirective>;

  constructor() {
  }
}
