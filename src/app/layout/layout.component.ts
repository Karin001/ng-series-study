import { Component, ViewEncapsulation,AfterViewInit} from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less', './theme.less'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent implements AfterViewInit {
  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0);
      }
    });
  }
  ngAfterViewInit() {
   /*  console.log(document.body.scrollHeight );
    console.log(document.body.clientHeight );
    fromEvent(window, 'scroll').subscribe((event) => {
      console.log(event);
    }); */
  }
}
