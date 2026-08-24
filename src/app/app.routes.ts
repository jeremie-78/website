import { type Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home";
import { GamesComponent } from "./components/games/games";


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