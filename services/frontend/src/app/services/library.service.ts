import { Injectable } from "@angular/core";
import { map } from "rxjs";
import {
  BookInsertGQL,
  BooksInsertInput,
  LibraryGQL,
  UsersToBooksSelectItem,
} from "../../graphql/graphql";

@Injectable({
  providedIn: "root",
})
export class LibraryService {
  constructor(
    private libraryGQL: LibraryGQL,
    private insertBookGQL: BookInsertGQL
  ) {}

  getBooksOfUser(userId: number) {
    return this.libraryGQL
      .fetch({ where: { userId: { eq: userId } } })
      .pipe(
        map((result) => result.data.userstobooks as UsersToBooksSelectItem[])
      );
  }

  addBookToUserLibrary(book: BooksInsertInput, userId: number) {
    this.insertBookGQL
      .mutate({ values: { author: "TEST", "isbn": "TEST", "title": "asdfasdfasfasfsad" } })
      .subscribe(console.log);
  }
}
