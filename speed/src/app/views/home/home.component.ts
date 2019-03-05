import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { State } from '@app/core/reducers';

import { Store } from '@ngrx/store';

import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnDestroy, OnInit {

  launchStatus$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  // Subscriptions
  statusSubscription$;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.statusSubscription$ = this.store.select('launchStatus').subscribe(state => {
      this.launchStatus$.next(state.launchStatus);
    });
  }

  ngOnDestroy() {
    this.statusSubscription$.unsubscribe();
  }
}
