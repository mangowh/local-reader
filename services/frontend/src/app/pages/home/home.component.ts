import { Component } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [JsonPipe],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  users: any = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
