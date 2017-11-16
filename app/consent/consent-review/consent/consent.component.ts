import { Component, OnInit, ViewChild } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";
import { RouterExtensions } from "nativescript-angular/router";
import { RadDataFormComponent } from "nativescript-pro-ui/dataform/angular";

import { ConsentReviewStep } from "../../../shared/consent-review-step.model";
import { TaskService } from "../../../shared/task.service";
import { ConsentForm } from "./consent-form.model";

@Component({
    selector: "Consent",
    moduleId: module.id,
    templateUrl: "./consent.component.html",
    styleUrls: ["../../consent-common.css"]
})
export class ConsentComponent implements OnInit {
    @ViewChild("consentFormElement") consentFormElement: RadDataFormComponent;
    private _consentForm: ConsentForm;

    constructor(
        private _routerExtensions: RouterExtensions,
        private _taskService: TaskService
    ) { }

    ngOnInit(): void {
        this._consentForm = new ConsentForm();
    }

    get consentForm(): ConsentForm {
        return this._consentForm;
    }

    onDoneButtonTap() {
        if (this.consentFormElement.dataForm.hasValidationErrors()) {
            return;
        }

        const givenName = this._consentForm.firstName;
        const familyName = this._consentForm.lastName;
        const consentReviewStep = new ConsentReviewStep("consentReviewStep", givenName, familyName);

        this._taskService.addStep(consentReviewStep);
        this._taskService.pushTask("consentTask");

        this._routerExtensions.navigate(["/survey"],
            {
                animated: true,
                transition: {
                    name: "slideRight",
                    duration: 200,
                    curve: "ease"
                }
            });
    }

    onCancelButtonTap() {
        this._routerExtensions.navigate(["/login"],
            {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideRight",
                    duration: 200,
                    curve: "ease"
                }
            });
    }
}