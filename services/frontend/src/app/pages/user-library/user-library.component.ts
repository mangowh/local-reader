import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import {
  heroPlusCircle,
  heroMagnifyingGlass,
  heroXMark,
} from "@ng-icons/heroicons/outline";
import { BehaviorSubject, of, switchMap, take, tap } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { LibraryService } from "../../services/library.service";
import { BooksItem, UsersToBooksSelectItem } from "../../../graphql/graphql";

@Component({
  selector: "app-user-library",
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  providers: [provideIcons({ heroPlusCircle, heroMagnifyingGlass, heroXMark })],
  templateUrl: "./user-library.component.html",
  styleUrl: "./user-library.component.scss",
})
export class UserLibraryComponent implements OnInit {
  currentUser$ = this.authService.currentUser$;

  books$ = new BehaviorSubject<UsersToBooksSelectItem[] | null>(null);

  constructor(
    private authService: AuthService,
    private libraryService: LibraryService
  ) {}

  ngOnInit(): void {
    this.updateBooks();
  }

  updateBooks() {
    return this.currentUser$
      .pipe(
        take(1),
        switchMap((currentUser) => {
          if (currentUser) {
            return this.libraryService.getBooksOfUser(currentUser.id);
          }

          return of([]);
        }),
        tap((books) => this.books$.next(books))
      )
      .subscribe();
  }

  deleteBook(bookId: number) {
    const val = this.books$.getValue();

    this.currentUser$
      .pipe(
        take(1),
        switchMap((currentUser) =>
          this.libraryService.unassignBookToUserLibrary(bookId, currentUser!.id)
        )
      )
      .subscribe(() => {
        this.updateBooks();
      });
  }
}
