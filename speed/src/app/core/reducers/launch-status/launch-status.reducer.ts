import { LaunchStatusActions, LaunchStatusActionTypes } from '@app/core/reducers/launch-status/launch-status.actions';

export interface LaunchStatusState {
  launchStatus: any[];
  launchStatusLoaded: boolean;
  loading: boolean;
}

export const initialState: LaunchStatusState = {
  launchStatus: [],
  launchStatusLoaded: false,
  loading: false
};

export function reducer(state = initialState, action: LaunchStatusActions): LaunchStatusState {
  switch (action.type) {
    case LaunchStatusActionTypes.LoadLaunchStatus:
      return { ...state, loading: true };
    case LaunchStatusActionTypes.LaunchStatusLoaded:
      return { ...state, launchStatus: action.payload, launchStatusLoaded: true, loading: false };
    default:
      return state;
  }
}
