import { Component, OnInit, Signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { DatabaseService } from "app/services/database";
import { Game } from "app/interfaces/game";


@Component({
	selector: "app-games",
	templateUrl: "./games.html",
	styleUrl: "./games.css",
})
export class GamesComponent {

	games: Signal<Game[]>;

	constructor (private databaseService: DatabaseService) {
		this.games = toSignal<Game[], Game[]>(this.databaseService.getGames(), { initialValue: [] });
	}
}