import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MapWithDropdownComponent} from "./map-with-dropdown.component";

@NgModule({
    declarations: [MapWithDropdownComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [MapWithDropdownComponent],
})
export class MapWithDropdownModule {
    constructor() {
    }

    ngOnInit(): void {
    }
}
