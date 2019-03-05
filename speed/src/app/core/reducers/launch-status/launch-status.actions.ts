import { Action } from '@ngrx/store';

export enum LaunchStatusActionTypes {
  LoadLaunchStatus = '[LaunchStatus] Load LaunchStatus',
  LaunchStatusLoaded = '[LaunchStatus] LaunchStatuss Loaded',
}

export class LoadLaunchStatus implements Action {
  readonly type = LaunchStatusActionTypes.LoadLaunchStatus;
}

export class LaunchStatusLoaded implements Action {
  readonly type = LaunchStatusActionTypes.LaunchStatusLoaded;
  constructor(readonly payload: any[]) {}
}

export type LaunchStatusActions = LoadLaunchStatus | LaunchStatusLoaded;
