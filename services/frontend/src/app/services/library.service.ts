import { Injectable } from "@angular/core";
import { map, switchMap } from "rxjs";
import {
  BookInsertGQL,
  BooksGQL,
  BooksInsertInput,
  BooksItem,
  LibraryGQL,
  OrderDirection,
  ReadingInsertGQL,
  ReadingsGQL,
  ReadingsItem,
  SaveBookIntoUserLibraryGQL,
  RemoveBookFromUserLibraryGQL,
  UsersToBooksSelectItem,
} from "../../graphql/graphql";

@Injectable({
  providedIn: "root",
})
export class LibraryService {
  constructor(
    private booksGQL: BooksGQL,
    private readingsGQL: ReadingsGQL,
    private insertReadingGQL: ReadingInsertGQL,
    private libraryGQL: LibraryGQL,
    private insertBookGQL: BookInsertGQL,
    private saveBookGQL: SaveBookIntoUserLibraryGQL,
    private removeBookGQL: RemoveBookFromUserLibraryGQL
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

  unassignBookToUserLibrary(bookId: number, userId: number) {
    return this.removeBookGQL.mutate({
      where: {
        bookId: {
          eq: bookId,
        },
        userId: {
          eq: userId,
        },
      },
    });
  }

  addBookToUserLibrary(book: BooksInsertInput, userId: number) {
    return this.addBookToLibrary(book).pipe(
      switchMap((newBook) => {
        return this.assignBookToUserLibrary(newBook.id, userId);
      })
    );
  }

  getReadingsOfBooksByUser(bookId: number, userId: number) {
    return this.readingsGQL
      .fetch({
        orderBy: {
          creationDate: {
            direction: OrderDirection.Desc,
            priority: 1,
          },
        },
        where: {
          bookId: {
            eq: bookId,
          },
          userId: {
            eq: userId,
          },
        },
      })
      .pipe(map((res) => res.data.readings as ReadingsItem[]));
  }

  addReadingOfBookByUser(bookId: number, userId: number) {
    return this.insertReadingGQL
      .mutate({ values: { bookId, userId } })
      .pipe(map((res) => res.data?.insertIntoReadingsSingle as ReadingsItem));
  }
}
