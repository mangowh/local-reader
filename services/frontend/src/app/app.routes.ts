import { inject } from "@angular/core";
import { CanActivateFn, Router, Routes } from "@angular/router";
import { AddBookComponent } from "./pages/add-book/add-book.component";
import { LoginComponent } from "./pages/login/login.component";
import { UserLibraryComponent } from "./pages/user-library/user-library.component";
import { ViewBookComponent } from "./pages/view-book/view-book.component";
import { AuthService } from "./services/auth.service";

const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.getCurrentUser()) {
    return true;
  } else {
    router.navigate(["/login"]);
    return false;
  }
};

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "library",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "books",
    canActivate: [authGuard],
    children: [
      {
        path: ":id",
        component: ViewBookComponent,
      },
    ],
  },
  {
    path: "library/add",
    canActivate: [authGuard],
    component: AddBookComponent,
  },
  {
    path: "library",
    canActivate: [authGuard],
    component: UserLibraryComponent,
  },
  { path: "**", pathMatch: "full", redirectTo: "" },
];
