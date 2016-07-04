import { Component } from "@angular/core";

import { AttributeDirective } from "./attribute.directive";
import { ClickerDirective } from "./clicker.directive";

@Component({
    selector: 'host',
    template: `
        <h1>Directive Binding</h1>
        <h3 myDirective="one time init"
            [param]="sharedObject" 
            bind-another="'another param'"
            (event)="elementContent = $event">
            {{elementContent}}
        </h3>
        <p (myClicker)="clickerContent=$event">{{clickerContent}}</p>`,
    directives: [
        AttributeDirective,
        ClickerDirective
    ]
})
export class HostComponent {

    private elementContent = 'click me';
    private clickerContent = 'click me as well';

    private sharedObject = {
        id: 123,
        name: 'one-two-three'
    };

}