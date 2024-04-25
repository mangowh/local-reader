import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ApiService } from "./services/api.service";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  users: any = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
