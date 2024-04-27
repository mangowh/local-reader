import { Component, DestroyRef, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroArrowLeft, heroCheckCircle } from "@ng-icons/heroicons/outline";
import { take } from "rxjs";
import { BooksInsertInput } from "../../../graphql/graphql";
import { ButtonComponent } from "../../components/button/button.component";
import { AuthService } from "../../services/auth.service";
import { LibraryService } from "../../services/library.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-add-book",
  standalone: true,
  providers: [provideIcons({ heroCheckCircle, heroArrowLeft })],
  templateUrl: "./add-book.component.html",
  styleUrl: "./add-book.component.scss",
  imports: [
    CommonModule,
    RouterModule,
    NgIconComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
})
export class AddBookComponent {
  form = new FormGroup({
    title: new FormControl("", Validators.required),
    author: new FormControl("", Validators.required),
    isbn: new FormControl("", Validators.required),
    plot: new FormControl(""),
  });

  currentUser$ = this.authService.currentUser$;

  destroyRef = inject(DestroyRef);

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private libraryService: LibraryService
  ) {}

  addBookToUserLibrary($event: MouseEvent) {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      return;
    }

    this.currentUser$.pipe(take(1)).subscribe((currentUser) => {
      if (currentUser) {
        this.libraryService
          .addBookToUserLibrary(
            this.form.getRawValue() as BooksInsertInput,
            currentUser?.id
          )
          .pipe(take(1))
          .subscribe(() =>
            this.router.navigate([".."], {
              relativeTo: this.route,
            })
          );
      }
    });
  }
}
