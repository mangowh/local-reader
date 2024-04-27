import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { LoginComponent } from "./pages/login/login.component";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./components/button/button.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [CommonModule, RouterModule, LoginComponent, ButtonComponent],
})
export class AppComponent {
  isLoggedIn$ = this.authService.isLoggedIn$;
  currentUser$ = this.authService.currentUser$;

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
