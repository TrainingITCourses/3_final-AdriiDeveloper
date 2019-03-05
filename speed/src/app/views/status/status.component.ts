import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { State } from '@app/core/reducers';

import { ActivatedRoute } from '@angular/router';

import { LoadSelectedLaunchStatus } from '@app/core/reducers/selected-launch-status/selected-launch-status.actions';
import { LoadLaunches } from '@app/core/reducers/launches/launches.actions';

import { Store } from '@ngrx/store';

import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-status',
  templateUrl: './status.component.html'
})
export class StatusComponent implements OnDestroy, OnInit {

  filteredLaunches: any[];
  sort: boolean;

  // Subscriptions
  routerSubscription$;
  statusSubscription$;
  launchesSubscription$;

  constructor(private changeDetectorRef: ChangeDetectorRef, private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadLaunches());

    this.routerSubscription$ = this.store.select('router').subscribe(router => {
      const statusId = router.state.root.firstChild.params['id'] ? Number(router.state.root.firstChild.params['id']) : null;

      if (statusId) {
        this.statusSubscription$ = this.store.select('launchStatus').subscribe(state => {
          this.store.dispatch(new LoadSelectedLaunchStatus(state.launchStatus.find(status => status.id === statusId)));
        });

        this.launchesSubscription$ = this.store.select('launches').subscribe(state => {
          this.filteredLaunches = state.launches.filter(launch => launch.status === statusId);
          this.changeDetectorRef.detectChanges();
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.launchesSubscription$) this.launchesSubscription$.unsubscribe();
    if (this.routerSubscription$) this.routerSubscription$.unsubscribe();
    if (this.statusSubscription$) this.statusSubscription$.unsubscribe();
  }

  /**
   * This function orders the available launches by date
   */
  sortLaunches = () => {
    this.filteredLaunches = this.sort ? 
                            this.filteredLaunches.sort((a, b) => new Date(b.windowstart).getTime() - new Date(a.windowstart).getTime()) :
                            this.filteredLaunches.sort((a, b) => new Date(a.windowstart).getTime() - new Date(b.windowstart).getTime());
  }
}
