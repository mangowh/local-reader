import { Injectable } from "@angular/core";
import { map, of, switchMap } from "rxjs";
import {
  BookInsertGQL,
  BooksInsertInput,
  BooksItem,
  LibraryGQL,
  SaveBookIntoUserLibraryGQL,
  UsersToBooksSelectItem,
} from "../../graphql/graphql";

@Injectable({
  providedIn: "root",
})
export class LibraryService {
  constructor(
    private libraryGQL: LibraryGQL,
    private insertBookGQL: BookInsertGQL,
    private saveBookGQL: SaveBookIntoUserLibraryGQL
  ) {}

  getBooksOfUser(userId: number) {
    return this.libraryGQL
      .fetch(
        {
          where: { userId: { eq: userId } },
          orderBy: {
            creationDate: {
              direction: "desc",
              priority: 1,
            },
          },
        } as any,
        { fetchPolicy: "no-cache" }
      )
      .pipe(
        map((result) => result.data.userstobooks as UsersToBooksSelectItem[])
      );
  }

  addBookToLibrary(book: BooksInsertInput) {
    return this.insertBookGQL
      .mutate({ values: book })
      .pipe(map((res) => res.data?.insertIntoBooksSingle as BooksItem));
  }

  assignBookToUserLibrary(bookId: number, userId: number) {
    return this.saveBookGQL.mutate({ values: { bookId, userId } });
  }

  addBookToUserLibrary(book: BooksInsertInput, userId: number) {
    return this.addBookToLibrary(book).pipe(
      switchMap((newBook) => {
        return this.assignBookToUserLibrary(newBook.id, userId);
      })
    );
  }
}
