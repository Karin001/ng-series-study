import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
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
    /* let element;
    let elementHeight;
    setTimeout(() => {
      element = document.body.querySelector('.ant-anchor');
      elementHeight = Number.parseInt(window.getComputedStyle(element).height);
    }, 0);
    let maxHeight;
    setTimeout(() => {
      maxHeight = document.documentElement.scrollTop || document.body.scrollHeight - document.body.clientHeight;
    }, 0);
    fromEvent(window, 'scroll').subscribe((event) => {
      const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollHeight > maxHeight - 100) {
        const gap = scrollHeight - (maxHeight - 100);
        const height = elementHeight - gap - 230;
        element.setAttribute('style', `height: ${height}px;`);
      }
    }); */
  }
}
