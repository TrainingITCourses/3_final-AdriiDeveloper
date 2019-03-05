import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  ASSETS = 'assets/data';

  constructor(private http: HttpClient) { }

  getAgencies$ = (): Observable<any[]> =>
    this.http.get(`${environment.url}/${this.ASSETS}/launchagencies.json`).pipe(map((res: any) => res.agencies))

   getMissionTypes$ = (): Observable<any[]> =>
    this.http.get(`${environment.url}/${this.ASSETS}/launchmissions.json`).pipe(map((res: any) => res.types))

  getStatusTypes$ = (): Observable<any[]> =>
    this.http.get(`${environment.url}/${this.ASSETS}/launchstatus.json`).pipe(map((res: any) => res.types))

  getLaunches$ = (): Observable<any[]> =>
    this.http.get(`${environment.url}/${this.ASSETS}/launchlibrary.json`).pipe(map((res: any) => res.launches))
    
}
