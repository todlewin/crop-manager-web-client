import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import {Plant, PlantImpl} from "../plant";

@Component({
  selector: "app-plant-detail",
  templateUrl: "./plant-detail.component.html",
  styleUrls: ["./plant-detail.component.css"]
})
export class PlantDetailComponent implements OnInit {
  public pageTitlePrefix: string = "Plant Detail";
  public pageTitle: string;
  public plant: Plant;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    console.log(this.route.snapshot.paramMap.get("code"));
  }

  ngOnInit() {
    const code: string = this.route.snapshot.paramMap.get("code");

    this.pageTitle = `${this.pageTitlePrefix} : ${code}`;
    this.plant = new PlantImpl("test plant name",
      code,
      "test plant description",
      "test sow",
      1,
      "https://openclipart.org/download/189904/1388945287.svg");
  }

  onBack(): void {
    this.router.navigate(["/plants"]);
  }
}
