import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { environment } from '@env/environment';
import * as fromLaunches from './launches/launches.reducer';
import * as fromLaunchStatus from './launch-status/launch-status.reducer';
import * as fromSelectedLaunch from './selected-launch/selected-launch.reducer';
import * as fromSelectedLaunchStatus from './selected-launch-status/selected-launch-status.reducer';

export interface State {
  router: any;
  launches: fromLaunches.LaunchesState;
  launchStatus: fromLaunchStatus.LaunchStatusState;
  selectedLaunch: fromSelectedLaunch.SelectedLaunchState;
  selectedLaunchStatus: fromSelectedLaunchStatus.SelectedLaunchStatusState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  launches: fromLaunches.reducer,
  launchStatus: fromLaunchStatus.reducer,
  selectedLaunch: fromSelectedLaunch.reducer,
  selectedLaunchStatus: fromSelectedLaunchStatus.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
