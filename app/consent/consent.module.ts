import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIDataFormModule } from "nativescript-pro-ui/dataform/angular";

import { ConsentRoutingModule } from "./consent-routing.module";
import { ConsentComponent } from "./consent/consent.component";
import { DataGatheringComponent } from "./data-gathering/data-gathering.component";
import { DataUseComponent } from "./data-use/data-use.component";
import { ReviewComponent } from "./review/review.component";
import { SharingOptionsComponent } from "./sharing-options/sharing-options.component";
import { StudySurveyComponent } from "./study-survey/study-survey.component";
import { TimeCommitmentComponent } from "./time-commitment/time-commitment.component";
import { WelcomeComponent } from "./welcome.component";
import { WithdrawingComponent } from "./withdrawing/withdrawing.component";

@NgModule({
    imports: [
        ConsentRoutingModule,
        NativeScriptCommonModule,
        NativeScriptUIDataFormModule
    ],
    declarations: [
        WelcomeComponent,
        ConsentComponent,
        DataGatheringComponent,
        DataUseComponent,
        ReviewComponent,
        SharingOptionsComponent,
        StudySurveyComponent,
        TimeCommitmentComponent,
        WithdrawingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ConsentModule { }
