import { Routes } from "@angular/router";
import { AddBookComponent } from "./pages/add-book/add-book.component";
import { UserLibraryComponent } from "./pages/user-library/user-library.component";
import { ViewBookComponent } from "./pages/view-book/view-book.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "library",
  },
  {
    path: "books",
    children: [
      {
        path: ":id",
        component: ViewBookComponent,
      },
    ],
  },
  {
    path: "library/add",
    component: AddBookComponent,
  },
  {
    path: "library",
    component: UserLibraryComponent,
  },
  { path: "**", pathMatch: "full", redirectTo: "" },
];
