import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-depth-indicator",
  templateUrl: "./depth-indicator.component.html",
  styleUrls: ["./depth-indicator.component.css"]
})
export class DepthIndicatorComponent implements OnInit, OnChanges {
  depthIndicatorWidth: number;
  @Input() depth: number = 0;
  @Output() depthClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.depthIndicatorWidth = this.depth ? this.depth * 75 / 5 : 0;
  }

  onClick(): void {
    this.depthClicked.emit(`The rating ${this.depth} was clicked`);
  }
}
