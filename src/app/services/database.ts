import { Injectable } from "@angular/core";
import { HttpClient, type HttpResponse } from "@angular/common/http";
import { type Observable } from "rxjs";
import { type GameTemplate, type GameSubmission, type Game } from "app/interfaces/game";


@Injectable({ providedIn: "root" })
export class DatabaseService {

	constructor (private httpClient: HttpClient) {}

	searchGames (template: GameTemplate): Observable<Game[]> {
		const params = Object.entries(template)
			.filter(([key, value]) => value !== "")
			.map(([key, value]) => `${key}=${value}`);

		return this.httpClient.get<Game[]>(`/api/games${params.length > 0 ? "?" : ""}${params.join("&")}`);
	}

	addGames = (games: string): Observable<HttpResponse<Object>> => this.httpClient.post("/api/games", games, { observe: "response" });
}