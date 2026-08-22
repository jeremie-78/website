import { type Routes } from "@angular/router";
import { GamesComponent } from "./components/games/games";
import { HomeComponent } from "./components/home/home";


export const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "games",
		component: GamesComponent
	}
];