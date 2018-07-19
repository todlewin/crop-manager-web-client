import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title: string = "Crop Manager";
  public logoImageURL: string = "https://openclipart.org/download/194579/Farmer-penguin.svg";
  public logoImageTitle: string = "Garden";
  public logoImageWidth: number = 50;
  public logoImageHeight: number = 50;
  public logoImageMargin: number = 2;

  constructor() {}
}
