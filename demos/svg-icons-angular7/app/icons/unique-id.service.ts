
// Import the core angular services.
import { Injectable } from "@angular/core";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Injectable({
	providedIn: "root"
})
export class UniqueIDService {

	private id: number;
	private salt: number;

	constructor() {

		this.id = 0;
		this.salt = Date.now();

	}

	// ---
	// PUBLIC METHODS.
	// ---

	public next() : string {

		return( `unique-id-${ ++this.id }-${ this.salt }` );

	}

}
