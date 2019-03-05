import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { State } from '@app/core/reducers';
import { LoadSelectedLaunch } from '@app/core/reducers/selected-launch/selected-launch.actions';

import { Store } from '@ngrx/store';

import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launch',
  templateUrl: './launch.component.html'
})
export class LaunchComponent implements OnDestroy, OnInit {

  selectedLaunch$: BehaviorSubject<any> = new BehaviorSubject({});

  // Subscriptions
  routerSubscription$;
  launchesSubscription$;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.routerSubscription$ = this.store.select('router').subscribe(router => {
      const launchId = router.state.root.firstChild.params['id'] ? Number(router.state.root.firstChild.params['id']) : null;

      if (launchId) {
        this.launchesSubscription$ = this.store.select('launches').subscribe(state => {
          const selectedLaunch = state.launches.find(launch => launch.id === launchId);
          this.selectedLaunch$.next(selectedLaunch);
          this.store.dispatch(new LoadSelectedLaunch(selectedLaunch));
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.launchesSubscription$) this.launchesSubscription$.unsubscribe();
    if (this.routerSubscription$)  this.routerSubscription$.unsubscribe();
  }
}
