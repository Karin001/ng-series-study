import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoUploadComponent } from './auto-upload/auto-upload.component';
import { CommonQuestionComponent } from './common-question/common-question.component';

const routes: Routes = [
  { path: 'auto-upload', component: AutoUploadComponent },
  { path: 'common-question', component: CommonQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendRoutingModule { }
