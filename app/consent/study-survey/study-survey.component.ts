import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "study-survey", loadChildren: "./study-survey/study-survey.module#StudySurveyModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "StudySurvey",
    moduleId: module.id,
    templateUrl: "./study-survey.component.html",
    styleUrls: ["../consent-common.css", "../consent.css"]
})
export class StudySurveyComponent implements OnInit {
    constructor(private _routerExtensions: RouterExtensions) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    onNextButtonTap() {
        this._routerExtensions.navigate(["/consent/withdrawing"],
            {
                animated: true,
                transition: {
                    name: "slideRight",
                    duration: 200,
                    curve: "ease"
                }
            });
    }
}
