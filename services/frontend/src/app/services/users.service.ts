import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { UsersGQL, UsersQuery } from "../../graphql/graphql";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  users$: Observable<UsersQuery["users"]>;

  constructor(private usersGQL: UsersGQL) {
    this.users$ = this.usersGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.users));
  }
}
