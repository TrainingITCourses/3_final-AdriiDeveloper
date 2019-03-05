import { Action } from '@ngrx/store';

export enum SelectedLaunchActionTypes {
  LoadSelectedLaunch = '[SelectedLaunch] Load SelectedLaunch'
}

export class LoadSelectedLaunch implements Action {
  readonly type = SelectedLaunchActionTypes.LoadSelectedLaunch;
  constructor(readonly payload: any[]) {}
}

export type SelectedLaunchActions = LoadSelectedLaunch;
