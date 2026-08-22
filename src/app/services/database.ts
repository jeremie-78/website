import { HttpClient, type HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { type Observable } from "rxjs";
import { type Game } from "app/interfaces/game";


@Injectable({ providedIn: 'root' })
export class DatabaseService {

	constructor (private httpClient: HttpClient) {}

	getGames = (): Observable<Game[]> => this.httpClient.get<Game[]>("/api/games");

	addGame = (game: Game): Observable<HttpResponse<Object>> => this.httpClient.post("/api/games", game, { observe: "response" });
}