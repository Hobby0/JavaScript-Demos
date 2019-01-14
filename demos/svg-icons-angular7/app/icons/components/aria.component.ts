
// Import the core angular services.
import { ChangeDetectionStrategy } from "@angular/core";
import { Component } from "@angular/core";

import { AppIconDirective } from "./app-icon.directive";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "svg[with-aria]",
	host: {
		"[attr.aria-labelledby]": "( ( appIcon.title && appIcon.titleID ) || null )",
		"[attr.aria-describedby]": "( ( appIcon.description && appIcon.descriptionID ) || null )"
	},
	changeDetection: ChangeDetectionStrategy.OnPush,
	template:
	`
		<svg:g *ngIf="( appIcon.title || appIcon.description )">
			<title *ngIf="appIcon.title" [attr.id]="appIcon.titleID">
				{{ appIcon.title }}
			</title>
			<desc *ngIf="appIcon.description" [attr.id]="appIcon.descriptionID">
				{{ appIcon.description }}
			</desc>
		</svg:g>

		<ng-content></ng-content>
	`
})
export class AriaComponent {
	
	public appIcon: AppIconDirective;

	constructor( appIcon: AppIconDirective ) {

		this.appIcon = appIcon;

	}

}
