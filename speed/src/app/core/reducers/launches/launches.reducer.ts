import { LaunchesActionTypes, LaunchesActions } from './launches.actions';

export interface LaunchesState {
  launches: any[];
  launchesLoaded: boolean;
  loading: boolean;
}

export const initialState: LaunchesState = {
  launches: [],
  launchesLoaded: false,
  loading: false
};

export function reducer(state = initialState, action: LaunchesActions): LaunchesState {
  switch (action.type) {
    case LaunchesActionTypes.LoadLaunches:
      return { ...state, loading: true };
    case LaunchesActionTypes.LaunchesLoaded:
      return { ...state, launches: action.payload, launchesLoaded: true, loading: false };
    default:
      return state;
  }
}
