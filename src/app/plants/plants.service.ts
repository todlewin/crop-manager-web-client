import { Injectable } from "@angular/core";
import { Plant } from "./plant";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable } from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PlantsService {
  private plantsURL = "/plants.json"

  constructor(private http: HttpClient) { }

  public getPlants(): Observable<Array<Plant>> {
    return this.http.get<Array<Plant>>(this.plantsURL).pipe(
      tap(data => console.log(`ALL: ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  private handleError(err: any, caught: Observable<Array<Plant>>): Observable<Array<Plant>> {
    if (err.error instanceof ErrorEvent) {
      // A client side or network error occurred
      console.error(`Client Side Error Occurred: ${err.error.message}`);
    } else {
      console.error(`Server Returned Code: ${err.status}. Error Message: ${err.message}`);
    }

    return caught;
  }
}
