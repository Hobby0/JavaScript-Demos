
// Import the core angular services.
import { Component } from "@angular/core";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "my-app",
	styleUrls: [ "./app.component.less" ],
	template:
	`
		<p>
			test
		</p>


		<app-icon type="chevron-right-circle" title="This is cool"></app-icon>


	`
})
export class AppComponent {

	// I initialize the app component.
	constructor() {

	}

}
