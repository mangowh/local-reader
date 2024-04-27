import { Component } from "@angular/core";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroCheckCircle } from "@ng-icons/heroicons/outline";
import { ButtonComponent } from "../../components/button/button.component";
import { LibraryService } from "../../services/library.service";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

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
    title: new FormControl(""),
    author: new FormControl(""),
    isbn: new FormControl(""),
    plot: new FormControl(""),
  });

  constructor(private libraryService: LibraryService) {}

  addBookToUserLibrary($event: MouseEvent) {
    this.libraryService.addBookToUserLibrary(this.form.getRawValue() as any, 1);
  }
}
