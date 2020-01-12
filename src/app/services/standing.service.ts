import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { Team } from "../models/team.model";

@Injectable({
  providedIn: "root"
})
export class StandingService {

  private _teams: Subject<Array<Team>> = new BehaviorSubject<Array<Team>>([]);
  public readonly teams: Observable<Array<Team>> = this._teams.asObservable();
  
  constructor() { }
  
}
