import { LoadSelectedLaunch } from './selected-launch.actions';
import { reducer, initialState } from './selected-launch.reducer';

describe('Redux:  SelectedLaunch Reducer', () => {

  const launchStatus = {id: 1, name: 'Go', description: 'Launch is GO', changed: '2017-02-21 00:00:00', color: 'accent'}

  describe('LoadSelectedLaunch Action', () => {
    it('should execute LoadSelectedLaunch Action', () => {
      const action = new LoadSelectedLaunch([launchStatus]);
      const newState = reducer(initialState, action);

      expect(newState.launch).toEqual([launchStatus]);
    });
  });
});

