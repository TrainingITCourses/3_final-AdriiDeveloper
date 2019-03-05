import { Action } from '@ngrx/store';

export enum SelectedLaunchStatusActionTypes {
  LoadSelectedLaunchStatus = '[SelectedLaunchStatus] Load SelectedLaunchStatuss'
}

export class LoadSelectedLaunchStatus implements Action {
  readonly type = SelectedLaunchStatusActionTypes.LoadSelectedLaunchStatus;
  constructor(readonly payload: any[]) {}
}

export type SelectedLaunchStatusActions = LoadSelectedLaunchStatus;
