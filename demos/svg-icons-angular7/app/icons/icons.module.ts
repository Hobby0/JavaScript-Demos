
// Import the core angular services.
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Import the application components and services.
import { ChevronLeftComponent } from "./components/chevron-left.component";
import { ChevronRightCircleComponent } from "./components/chevron-right-circle.component";
import { ChevronRightComponent } from "./components/chevron-right.component";

import { AppIconDirective } from "./components/app-icon.directive";
import { AriaComponent } from "./components/aria.component";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

var iconComponents = [
	AppIconDirective,
	ChevronLeftComponent,
	ChevronRightCircleComponent,
	ChevronRightComponent
];

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		...iconComponents
	],
	declarations: [
		AriaComponent,
		...iconComponents
	]
})
export class IconsModule {
	// ...
}
