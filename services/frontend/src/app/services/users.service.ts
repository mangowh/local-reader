import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import {
  UserGQL,
  UsersGQL,
  UsersQuery,
  UsersSelectItem,
} from "../../graphql/graphql";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  users$: Observable<UsersQuery["users"]>;

  constructor(
    private usersGQL: UsersGQL,
    private userGQL: UserGQL
  ) {
    this.users$ = this.usersGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.users));
  }

  getUserById(userId: number) {
    return this.userGQL
      .fetch({
        where: {
          id: {
            eq: userId,
          },
        },
      })
      .pipe(map((res) => res.data.usersSingle as UsersSelectItem));
  }
}
