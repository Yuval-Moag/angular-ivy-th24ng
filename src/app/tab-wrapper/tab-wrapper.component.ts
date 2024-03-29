import { Component, OnInit, ContentChild } from '@angular/core';
import {TabsItemsDirective} from './directives/tab-items.directive';
import {TabItemDirective} from './directives/tab-item.directive';


@Component({
  selector: 'app-tab-wrapper',
  templateUrl: './tab-wrapper.component.html',
  styleUrls: ['./tab-wrapper.component.scss']
})
export class TabWrapperComponent implements OnInit {

  @ContentChild(TabsItemsDirective)
  public tabItems: TabsItemsDirective;

  constructor() { }

  ngOnInit() {
  }

}