import { SelectedLaunchActions,
         SelectedLaunchActionTypes } from './selected-launch.actions';

export interface SelectedLaunchState {
  launch: any;
}

export const initialState: SelectedLaunchState = {
  launch: {}
};

export function reducer(state = initialState, action: SelectedLaunchActions): SelectedLaunchState {
  switch (action.type) {
    case SelectedLaunchActionTypes.LoadSelectedLaunch:
      return { ...state, launch: action.payload };
    default:
      return state;
  }
}
