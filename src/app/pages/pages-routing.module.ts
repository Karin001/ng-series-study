import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// layout
import { LayoutComponent } from '../layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/project/introduction', pathMatch: 'full' },
      { path: 'project', loadChildren: './project/project.module#ProjectModule' },
      { path: 'angular', loadChildren: './angular/angular.module#AngularModule' },
      { path: 'rxjs', loadChildren: './rxjs/rxjs.module#RxjsModule' },
      { path: 'recommend', loadChildren: './recommend/recommend.module#RecommendModule' },
      { path: '**', redirectTo: '/project/introduction' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      useHash: false,
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
