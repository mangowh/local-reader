import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { AvatarComponent } from "../../components/avatar/avatar.component";

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  imports: [CommonModule, AvatarComponent],
})
export class HomeComponent {
  initialsOfUser({
    firstName,
    lastName,
  }: {
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
  }) {
    return `${firstName} ${lastName}`
      .split(" ")
      .map((n) => n[0])
      .join("");
  }
  users$ = this.usersService.users$;

  constructor(private usersService: UsersService) {}
}
