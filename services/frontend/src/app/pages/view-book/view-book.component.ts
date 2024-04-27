import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject, switchMap } from "rxjs";
import { LibraryService } from "../../services/library.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-view-book",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./view-book.component.html",
  styleUrl: "./view-book.component.scss",
})
export class ViewBookComponent implements OnInit {
  bookId$ = new BehaviorSubject<number | null>(null);

  bookData$ = this.bookId$.pipe(
    switchMap((bookId) => this.libraryService.getBookById(bookId!))
  );

  constructor(
    private route: ActivatedRoute,
    private libraryService: LibraryService
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get("id");

    if (bookId) {
      this.bookId$.next(parseInt(bookId));
    }
  }
}
