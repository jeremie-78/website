import { Component, signal, type WritableSignal } from "@angular/core";
import { FormsModule, type NgForm } from "@angular/forms";
import { DatabaseService } from "app/services/database";
import { type Game } from "app/interfaces/game";


@Component({
	selector: "app-games",
	templateUrl: "./games.html",
	styleUrl: "./games.css",
	imports: [FormsModule]
})
export class GamesComponent {

	completeStatusToggle: boolean | string = "";

	searched = false;
	games: WritableSignal<Game[]>;

	constructor (private databaseService: DatabaseService) {
		this.games = signal([]);
	}

	toggle () {
		if (this.completeStatusToggle === "") {
			this.completeStatusToggle = true;
		} else if (this.completeStatusToggle === true) {
			this.completeStatusToggle = false;
		} else {
			this.completeStatusToggle = "";
		}
	}

	search (form: NgForm): void {
		this.databaseService.searchGames(form.value).subscribe((results: Game[]) => {
			this.games.set(results);
			this.searched = true;
		});
	}

	add (form: NgForm): void {
		const csv = [
			Object.keys(form.value),
			Object.values(form.value)
		].map(row => row.join(",")).join("\n");

		this.databaseService.addGames(csv).subscribe();
	}

	async import (event: Event): Promise<void> {
		this.databaseService.addGames(await ((event.target as HTMLInputElement).files as FileList)[0].text()).subscribe();
	}
}