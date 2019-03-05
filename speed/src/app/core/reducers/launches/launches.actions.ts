import { Action } from '@ngrx/store';

export enum LaunchesActionTypes {
  LoadLaunches = '[Launches] Load Launches',
  LaunchesLoaded = '[Launches] Launches Loaded'
}

export class LoadLaunches implements Action {
  readonly type = LaunchesActionTypes.LoadLaunches;
}

export class LaunchesLoaded implements Action {
  readonly type = LaunchesActionTypes.LaunchesLoaded;
  constructor(readonly payload: any[]) {}
}

export type LaunchesActions =
  LoadLaunches |
  LaunchesLoaded;
