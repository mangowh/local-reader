import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { UserLibraryComponent } from "./pages/user-library/user-library.component";
import { AddBookComponent } from "./pages/add-book/add-book.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "library",
    children: [
      {
        path: ":id/add",
        component: AddBookComponent,
      },
      {
        path: ":id",
        component: UserLibraryComponent,
      },
    ],
  },
  { path: "**", pathMatch: "full", redirectTo: "" },
];
