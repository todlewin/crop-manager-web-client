import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {PlantListComponent} from "./plant-list/plant-list.component";
import {PlantDetailComponent} from "./plant-detail/plant-detail.component";
import {PlantDetailGuard} from "./plant-detail.guard";
import {DepthIndicatorComponent} from "./depth-indicator/depth-indicator.component";
import {CustomPipesModule} from "../custom-pipes/custom-pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "plants",
      component: PlantListComponent},
      { path: "plants/:code",
        canActivate: [PlantDetailGuard],
        component: PlantDetailComponent}]),
    CustomPipesModule
  ],
  declarations: [PlantListComponent, PlantDetailComponent, DepthIndicatorComponent]
})
export class PlantModule { }
