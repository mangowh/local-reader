import { Component } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { AsyncPipe, JsonPipe } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  users$ = this.usersService.users$;

  constructor(private usersService: UsersService) {}
}
