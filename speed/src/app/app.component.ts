import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

import { State } from '@app/core/reducers';

import { Store } from '@ngrx/store';

import { BehaviorSubject } from 'rxjs';

import { LoadLaunchStatus } from './core/reducers/launch-status/launch-status.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {

  stateUrl$: BehaviorSubject<string> = new BehaviorSubject('');
  selectedLaunchStatusName$: BehaviorSubject<string> = new BehaviorSubject('');
  selectedLaunchName$: BehaviorSubject<string> = new BehaviorSubject('');
  loading: boolean;
  version = '1';

  constructor(private changeDetectorRef: ChangeDetectorRef, private router: Router, private store: Store<State>, swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
        const msg = `current: ${event.current.hash}. Load new: ${event.available.hash} ? 
                     Hay una actualización disponible, ¿desea actualizar?`;
        if (confirm(msg)) window.location.reload();
      });
    }
  }

  ngOnInit () {
    this.router.events.subscribe(event => {
        if (event instanceof RouteConfigLoadStart) {
            this.loading = true;
        } else if (event instanceof RouteConfigLoadEnd) {
            this.loading = false;
        }
    });

    this.store.dispatch(new LoadLaunchStatus());

    this.store.select('router').subscribe(router => {
        this.stateUrl$.next(router ? router.state.url : null);
        this.changeDetectorRef.detectChanges();
    });

    this.store.select('selectedLaunchStatus').subscribe(payload => {
      if (payload && payload.status) {
        this.selectedLaunchStatusName$.next(payload.status.name);
        this.changeDetectorRef.detectChanges();
      } 
    });

    this.store.select('selectedLaunch').subscribe(payload => {
      if (payload && payload.launch) {
        this.selectedLaunchName$.next(payload.launch.name);
        this.changeDetectorRef.detectChanges();
      }
    });
  }
}
