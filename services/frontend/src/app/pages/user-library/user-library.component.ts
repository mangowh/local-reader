import { Component, OnInit } from "@angular/core";
import { UsersToBooksSelectItem } from "../../../graphql/graphql";
import { LibraryService } from "../../services/library.service";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-user-library",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user-library.component.html",
  styleUrl: "./user-library.component.scss",
})
export class UserLibraryComponent implements OnInit {
  books: UsersToBooksSelectItem[] = [];

  userId?: number;

  constructor(
    private route: ActivatedRoute,
    private libraryService: LibraryService
  ) {}

  ngOnInit(): void {
    const userIdParam = this.route.snapshot.paramMap.get("id");

    if (userIdParam) {
      this.userId = parseInt(userIdParam);

      this.libraryService.getBooksOfUser(this.userId).subscribe((books) => {
        this.books = books;
      });
    }
  }
}
