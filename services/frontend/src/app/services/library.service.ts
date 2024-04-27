import { Injectable } from "@angular/core";
import { map, switchMap } from "rxjs";
import {
  BookInsertGQL,
  BooksGQL,
  BooksInsertInput,
  BooksItem,
  LibraryGQL,
  OrderDirection,
  SaveBookIntoUserLibraryGQL,
  UsersToBooksSelectItem,
} from "../../graphql/graphql";

@Injectable({
  providedIn: "root",
})
export class LibraryService {
  constructor(
    private booksGQL: BooksGQL,
    private libraryGQL: LibraryGQL,
    private insertBookGQL: BookInsertGQL,
    private saveBookGQL: SaveBookIntoUserLibraryGQL
  ) {}

  getBookById(bookId: number) {
    return this.booksGQL
      .fetch({
        orderBy: {
          creationDate: {
            direction: OrderDirection.Desc,
            priority: 1,
          },
        },
        where: {
          id: {
            eq: bookId,
          },
        },
      })
      .pipe(map((res) => (res.data.books[0] as BooksItem) ?? null));
  }

  getBooksOfUser(userId: number) {
    return this.libraryGQL
      .fetch(
        {
          where: { userId: { eq: userId } },
          orderBy: {
            creationDate: {
              direction: OrderDirection.Desc,
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
