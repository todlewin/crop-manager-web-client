import { Injectable } from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PlantDetailGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


    let code: string = next.url[1].path;

    if (code && code !== "12-34") {
      return true;
    }

    alert(`No Access To Plant Code: ${code}`);
    this.router.navigate(["/plants"]);

    return false;
  }
}
