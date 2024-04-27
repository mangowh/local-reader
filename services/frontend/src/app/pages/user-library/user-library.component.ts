import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroPlusCircle } from "@ng-icons/heroicons/outline";
import { UsersToBooksSelectItem } from "../../../graphql/graphql";
import { LibraryService } from "../../services/library.service";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-user-library",
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  providers: [provideIcons({ heroPlusCircle })],
  templateUrl: "./user-library.component.html",
  styleUrl: "./user-library.component.scss",
})
export class UserLibraryComponent implements OnInit {
  books: UsersToBooksSelectItem[] = [];

  userId?: number;
  currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private libraryService: LibraryService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    const userIdParam = this.route.snapshot.paramMap.get("id");

    if (userIdParam) {
      this.userId = parseInt(userIdParam);

      this.usersService.getUserById(this.userId).subscribe((res) => {
        this.currentUser = res;
      });

      this.libraryService.getBooksOfUser(this.userId).subscribe((books) => {
        this.books = books;
      });
    }
  }
}
