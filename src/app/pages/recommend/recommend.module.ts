import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { RecommendRoutingModule } from './recommend-routing.module';

import { AutoUploadComponent } from './auto-upload/auto-upload.component';
import { CommonQuestionComponent } from './common-question/common-question.component';

const COMPONENTS_DECLARATIONS = [
    AutoUploadComponent,
    CommonQuestionComponent,
];
const DIRECTIVE_DECLARATIONS = [

];
const COMPONENTS_ENTRY = [];
@NgModule({
    imports: [
        SharedModule,
        RecommendRoutingModule,
    ],
    declarations: [
        COMPONENTS_DECLARATIONS,
        DIRECTIVE_DECLARATIONS,
        COMPONENTS_ENTRY
    ],
    entryComponents: COMPONENTS_ENTRY
})
export class RecommendModule { }
