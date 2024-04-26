import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { LibraryGQL, UsersToBooksSelectItem } from "../../graphql/graphql";

@Injectable({
  providedIn: "root",
})
export class LibraryService {
  constructor(private libraryGQL: LibraryGQL) {}

  getBooksOfUser(userId: number) {
    return this.libraryGQL
      .fetch({ where: { userId: { eq: userId } } })
      .pipe(
        map((result) => result.data.userstobooks as UsersToBooksSelectItem[])
      );
  }
}