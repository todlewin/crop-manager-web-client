import { Component, OnInit } from '@angular/core';
import {Plant, PlantImpl} from "../plant";

@Component({
  selector: "app-plant-list",
  templateUrl: "./plant-list.component.html",
  styleUrls: ["./plant-list.component.css"]
})
export class PlantListComponent implements OnInit {
  pageTitle: string = "Plant List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: string = "";

  plants: Array<Plant> = [];
  filteredPlants: Array<Plant> = [];

  constructor() {
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(listFilter: string) {
    this._listFilter = listFilter;
    this.filteredPlants = this.performFilter(listFilter);
  }

  ngOnInit() {
    this.plants.push(new PlantImpl("Bean",
                              "12-34",
                              "Climbing Bean",
                              "Autumn",
                              0,
                              "https://openclipart.org/download/172617/1349492461.svg"));
    this.plants.push(new PlantImpl("Pea",
      "45-67",
      "Climbing Pea",
      "All Year Round",
      1,
      "https://openclipart.org/download/256717/pea-pod.svg"));
    this.plants.push(new PlantImpl("Brussel Sprout",
      "90-AB",
      "Brussel Sprout Bush",
      "All Year Round",
      2,
      "https://openclipart.org/download/263961/Sprout.svg"));
    this.plants.push(new PlantImpl("Cabbage",
      "BC-DE",
      "Green Cabbage",
      "Spring",
      3,
      "https://openclipart.org/download/256718/1469762090.svg"));
    this.plants.push(new PlantImpl("Pumpkin",
      "FG-HI",
      "Kent Pumpkin",
      "Winter",
      4,
      "https://openclipart.org/download/89287/pumpkin-simanek.svg"));
    this.plants.push(new PlantImpl("Orange",
      "JK-LM",
      "Navel Orange",
      "Spring",
      5,
      "https://openclipart.org/download/8537/Gerald-G-Simple-Fruit-FF-Menu-4.svg"));


    this.filteredPlants = this.plants;
  }

  toggleImage (): void {
    this.showImage = !this.showImage;
  }

  performFilter (filterBy: string): Array<Plant> {
    filterBy = filterBy.toLocaleLowerCase();

    return filterBy ? this.plants.filter((plant: Plant) =>
      plant.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : this.plants;
  }

  onDepthClicked(message: string): void {
    this.pageTitle = `Plant List ${message}`;
  }
}
