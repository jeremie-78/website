import { Component, type Signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
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

	games: Signal<Game[]>;

	constructor (private databaseService: DatabaseService) {
		this.games = toSignal<Game[], Game[]>(this.databaseService.getGames(), { initialValue: [] });
	}

	addGame (form: NgForm): void {
		this.databaseService.addGame(form.value);
	}
}