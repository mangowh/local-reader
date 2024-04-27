import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { UsersSelectItem } from "../../graphql/graphql";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private sessionStorageKey = "hastegaLoginKey";

  currentUser$ = new BehaviorSubject<UsersSelectItem | null>(null);

  isLoggedIn$ = this.currentUser$.pipe(map((user) => !!user));

  constructor(private router: Router) {
    this.currentUser$.next(this.getCurrentUser());
  }

  setCurrentUser(user: UsersSelectItem | null) {
    this.currentUser$.next(user);

    if (user) {
      sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(user));
    } else {
      sessionStorage.removeItem(this.sessionStorageKey);
    }
  }

  logout() {
    this.setCurrentUser(null);
    this.router.navigate(["/login"]);
  }

  getCurrentUser() {
    return sessionStorage.getItem(this.sessionStorageKey)
      ? (JSON.parse(
          sessionStorage.getItem(this.sessionStorageKey)!
        ) as UsersSelectItem)
      : null;
  }
}
