import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoUploadComponent } from './auto-upload/auto-upload.component';

const routes: Routes = [
  { path: 'auto-upload', component: AutoUploadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendRoutingModule { }
