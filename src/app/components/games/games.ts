import { Component, signal, ViewChild, type WritableSignal } from "@angular/core";
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
	@ViewChild("searchForm")
	searchForm: NgForm;

	completeStatusToggle: boolean | string = "";

	searched = false;
	games: WritableSignal<Game[]> = signal([]);

	constructor (private databaseService: DatabaseService) {}

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
			Object.values(form.value).map(value => JSON.stringify(value))
		].map(row => row.join(",")).join("\n");

		this.databaseService.addGames(csv).subscribe(this.updateSearch);
	}

	del (game: Game): void {
		this.databaseService.deleteGame(game).subscribe(this.updateSearch);
	}

	async import (input: HTMLInputElement): Promise<void> {
		this.databaseService.addGames(await (input.files as FileList)[0].text()).subscribe(this.updateSearch);
	}

	updateSearch = (): void => this.searchForm.ngSubmit.emit();
}