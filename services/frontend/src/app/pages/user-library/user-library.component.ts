import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import {
  heroPlusCircle,
  heroMagnifyingGlass,
  heroXMark,
} from "@ng-icons/heroicons/outline";
import { of, switchMap } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { LibraryService } from "../../services/library.service";

@Component({
  selector: "app-user-library",
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  providers: [provideIcons({ heroPlusCircle, heroMagnifyingGlass, heroXMark })],
  templateUrl: "./user-library.component.html",
  styleUrl: "./user-library.component.scss",
})
export class UserLibraryComponent {
  currentUser$ = this.authService.currentUser$;

  books$ = this.currentUser$.pipe(
    switchMap((currentUser) => {
      if (currentUser) {
        return this.libraryService.getBooksOfUser(currentUser.id);
      }

      return of([]);
    })
  );

  constructor(
    private authService: AuthService,
    private libraryService: LibraryService
  ) {}
}
