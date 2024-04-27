import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import {
  BehaviorSubject,
  combineLatest,
  map,
  switchMap,
  take,
  tap,
  withLatestFrom,
} from "rxjs";
import { LibraryService } from "../../services/library.service";
import { CommonModule } from "@angular/common";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroArrowLeft } from "@ng-icons/heroicons/outline";
import { AuthService } from "../../services/auth.service";
import { ButtonComponent } from "../../components/button/button.component";
import { ReadingsItem } from "../../../graphql/graphql";

@Component({
  selector: "app-view-book",
  standalone: true,
  providers: [provideIcons({ heroArrowLeft })],
  templateUrl: "./view-book.component.html",
  styleUrl: "./view-book.component.scss",
  imports: [CommonModule, RouterModule, NgIconComponent, ButtonComponent],
})
export class ViewBookComponent implements OnInit {
  currentUser$ = this.authService.currentUser$;
  bookId$ = new BehaviorSubject<number | null>(null);

  bookData$ = this.bookId$.pipe(
    switchMap((bookId) => this.libraryService.getBookById(bookId!))
  );

  readingsData$ = new BehaviorSubject<ReadingsItem[] | null>(null);

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private libraryService: LibraryService
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get("id");

    if (bookId) {
      this.bookId$.next(parseInt(bookId));
    }

    this.updateReadings();
  }

  updateReadings() {
    return combineLatest([this.bookId$, this.currentUser$])
      .pipe(
        take(1),
        switchMap(([bookId, currentUser]) => {
          return this.libraryService.getReadingsOfBooksByUser(
            bookId!,
            currentUser!.id
          );
        }),
        tap((val) => this.readingsData$.next(val))
      )
      .subscribe();
  }

  addReading() {
    return combineLatest([this.bookId$, this.currentUser$])
      .pipe(
        take(1),
        switchMap(([bookId, currentUser]) => {
          return this.libraryService.addReadingOfBookByUser(
            bookId!,
            currentUser!.id
          );
        })
      )
      .subscribe((newReading) => {
        this.readingsData$.next([
          newReading,
          ...(this.readingsData$.getValue() ?? []),
        ]);
      });
  }

  toLocaleDateString(timestamp: string) {
    return new Date(timestamp).toLocaleDateString();
  }

  toLocaleString(timestamp: string) {
    return new Date(timestamp).toLocaleString();
  }
}
