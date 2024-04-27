import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroCheckCircle } from "@ng-icons/heroicons/outline";
import { ButtonComponent } from "../../components/button/button.component";
import { LibraryService } from "../../services/library.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-book",
  standalone: true,
  providers: [provideIcons({ heroCheckCircle })],
  templateUrl: "./add-book.component.html",
  styleUrl: "./add-book.component.scss",
  imports: [NgIconComponent, ButtonComponent, ReactiveFormsModule],
})
export class AddBookComponent {
  form = new FormGroup({
    title: new FormControl("", Validators.required),
    author: new FormControl("", Validators.required),
    isbn: new FormControl("", Validators.required),
    plot: new FormControl(""),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private libraryService: LibraryService
  ) {}

  addBookToUserLibrary($event: MouseEvent) {
    const userIdParam = this.route.snapshot.paramMap.get("id");

    if (userIdParam) {
      this.libraryService
        .addBookToUserLibrary(
          this.form.getRawValue() as any,
          parseInt(userIdParam)
        )
        .subscribe(() =>
          this.router.navigate([".."], {
            relativeTo: this.route,
          })
        );
    }
  }
}
