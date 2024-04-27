import { Injectable } from "@angular/core";
import { BehaviorSubject, map, startWith } from "rxjs";
import { UsersSelectItem } from "../../graphql/graphql";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  sessionStorageKey = "hastegaLoginKey";

  currentUser$ = new BehaviorSubject<UsersSelectItem | null>(null);

  isLoggedIn$ = this.currentUser$.pipe(
    startWith(false),
    map((user) => !!user)
  );

  constructor() {
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
  }

  getCurrentUser() {
    return sessionStorage.getItem(this.sessionStorageKey)
      ? (JSON.parse(
          sessionStorage.getItem(this.sessionStorageKey)!
        ) as UsersSelectItem)
      : null;
  }
}
