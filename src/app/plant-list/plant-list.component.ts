import { Component, OnInit } from '@angular/core';

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

  plants: Array<any> = [
    {
      "Name": "Bean",
      "Code": "1234",
      "Description": "Climbing Bean",
      "Sow": "Autumn",
      "Depth": 1.5,
      "ImageURL": "https://openclipart.org/download/172617/1349492461.svg"
    },
    {
      "Name": "Pea",
      "Code": "4567",
      "Description": "Climbing Pea",
      "Sow": "All Year Round",
      "Depth": 1.5,
      "ImageURL": "https://openclipart.org/download/256717/pea-pod.svg"
    },
    {
      "Name": "Brussel Sprout",
      "Code": "90AB",
      "Description": "Brussel Sprout Bush",
      "Sow": "All Year Round",
      "Depth": 1.5,
      "ImageURL": "https://openclipart.org/download/263961/Sprout.svg"
    },
    {
      "Name": "Cabbage",
      "Code": "BCDE",
      "Description": "Green Cabbage",
      "Sow": "Spring",
      "Depth": 1.5,
      "ImageURL": "https://openclipart.org/download/256718/1469762090.svg"
    },
    {
      "Name": "Pumpkin",
      "Code": "FGHI",
      "Description": "Kent Pumpkin",
      "Sow": "Winter",
      "Depth": 1.5,
      "ImageURL": "https://openclipart.org/download/89287/pumpkin-simanek.svg"
    }]

  constructor() { }

  ngOnInit() {
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
