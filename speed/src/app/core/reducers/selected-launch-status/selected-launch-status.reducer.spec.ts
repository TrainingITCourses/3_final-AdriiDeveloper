import { LoadSelectedLaunchStatus } from './selected-launch-status.actions';
import { reducer, initialState } from './selected-launch-status.reducer';

describe('Redux:  SelectedLaunchStatus Reducer', () => {

  const launchStatus = {id: 1, name: 'Go', description: 'Launch is GO', changed: '2017-02-21 00:00:00', color: 'accent'}

  describe('LoadSelectedLaunchStatus Action', () => {
    it('should execute LoadSelectedLaunchStatus Action', () => {
      const action = new LoadSelectedLaunchStatus([launchStatus]);
      const newState = reducer(initialState, action);

      expect(newState.status).toEqual([launchStatus]);
    });
  });
});
