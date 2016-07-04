import { Component } from '@angular/core';

import { HostComponent } from "./host.component";

@Component({
    selector: 'app',
    template: `
        <host *ngIf="showSection('attribute')"></host>`,
    directives: [
        HostComponent
    ]
})
export class AppComponent {

    private showSection(name: string): boolean {
        if (!window.location.search) {
            return true;
        }
        const PARAM = window.location.search.substr(1);
        return PARAM === name;
    }
}