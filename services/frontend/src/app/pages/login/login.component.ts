import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { take } from "rxjs";
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
export class LoginComponent implements OnInit {
  users$ = this.usersService.users$;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.pipe(take(1)).subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigate(["/"]);
      }
    });
  }

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

    this.router.navigate(["/"]);
  }
}
