import { SelectedLaunchStatusActions, SelectedLaunchStatusActionTypes } from './selected-launch-status.actions';

export interface SelectedLaunchStatusState {
  status: any;
}

export const initialState: SelectedLaunchStatusState = {
  status: {}
};

export function reducer(state = initialState, action: SelectedLaunchStatusActions): SelectedLaunchStatusState {
  switch (action.type) {
    case SelectedLaunchStatusActionTypes.LoadSelectedLaunchStatus:
      return { ...state, status: action.payload};
    default:
      return state;
  }
}
