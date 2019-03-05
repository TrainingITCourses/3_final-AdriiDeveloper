import { LaunchesLoaded } from './launches.actions';
import { reducer, initialState } from './launches.reducer';

describe('Redux:  Launches Reducer', () => {

  const launchStatus = {id: 1, name: 'Go', description: 'Launch is GO', changed: '2017-02-21 00:00:00', color: 'accent'}

  describe('LoadLaunches Action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result.loading).toBeTruthy();
      expect(result).toBe(initialState);
    });
  });

  describe('LaunchesLoaded Action', () => {
    it('should execute LaunchesLoaded Action', () => {
      const action = new LaunchesLoaded([launchStatus]);
      const newState = reducer(initialState, action);

      expect(newState.loading).toBeFalsy();
      expect(newState.launchesLoaded).toBeTruthy();
      expect(newState.launches).toEqual([launchStatus]);
    });
  });
});

