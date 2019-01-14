
// Import the core angular services.
import { Component } from "@angular/core";
import { Directive } from "@angular/core";

// Import the application components and services.
import { UniqueIDService } from "../unique-id.service";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

export function AppIconComponent( slug: string, template: string ) {

	return(
		Component({
			selector: `app-icon[type=${ slug }]`,
			styleUrls: [ "../base.styles.less" ],
			template: template
		})
	);

}

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Directive({
	selector: "app-icon",
	inputs: [ "title", "description" ],
	host: {
		"[attr.title]": "( title || null )",
		"[attr.aria-hidden]": "! title",
		"[attr.role]": "( ( title && 'img' ) || null )"
	}
})
export class AppIconDirective {
	
	public description!: string;
	public descriptionID: string;
	public title!: string;
	public titleID: string;

	constructor( uniqueIDService: UniqueIDService ) {

		this.descriptionID = uniqueIDService.next();
		this.titleID = uniqueIDService.next();

	}

}
