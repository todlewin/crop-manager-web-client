import { Component, OnInit } from '@angular/core';
import {Plant, PlantImpl} from "../plant";
import {PlantsService} from "../plants.service";
import { Observable } from "rxjs";

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
  errorMessage: string;

  plants: Array<Plant> = [];
  filteredPlants: Array<Plant> = [];

  constructor(private _plantService: PlantsService) {
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(listFilter: string) {
    this._listFilter = listFilter;
    this.filteredPlants = this.performFilter(listFilter);
  }

  ngOnInit() {
    const plantsObservable: Observable<Array<Plant>> = this._plantService.getPlants();

    plantsObservable.subscribe( plants => {this.plants = plants; this.filteredPlants = this.plants; },
      error => this.errorMessage = <any>error);
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
