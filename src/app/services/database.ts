import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Game } from "app/interfaces/game";


@Injectable({ providedIn: 'root' })
export class DatabaseService {

	constructor (private httpClient: HttpClient) {}

	getGames = (): Observable<Game[]> => this.httpClient.get<Game[]>("/api/games")
}