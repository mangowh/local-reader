import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AvatarComponent } from "../../components/avatar/avatar.component";
import { AuthService } from "../../services/auth.service";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-login",
  standalone: true,
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
  imports: [CommonModule, AvatarComponent, RouterModule],
})
export class LoginComponent {
  users$ = this.usersService.users$;

  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {}

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

  loginWith(user: any) {
    this.authService.setCurrentUser(user);
  }
}
