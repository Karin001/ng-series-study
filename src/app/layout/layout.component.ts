import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less', './theme.less'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent {
  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0);
      }
    });
  }
}
