import { LaunchStatusLoaded, LoadLaunchStatus } from './launch-status.actions';
import { reducer, initialState } from './launch-status.reducer';

describe('Redux: LaunchStatus Reducer', () => {

  const launchStatus = {id: 1, name: 'Go', description: 'Launch is GO', changed: '2017-02-21 00:00:00', color: 'accent'}

  describe('LoadLaunchStatus Action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result.loading).toBeTruthy();
      expect(result).toBe(initialState);
    });

    it('should execute LoadChains Action', () => {
      const action = new LoadLaunchStatus();
      const newState = reducer(initialState, action);
  
      expect(newState.loading).toBeTruthy();
    });
  });

  describe('LaunchStatusLoaded Action', () => {
    it('should execute LaunchStatusLoaded Action', () => {
      const action = new LaunchStatusLoaded([launchStatus]);
      const newState = reducer(initialState, action);

      expect(newState.loading).toBeFalsy();
      expect(newState.launchStatusLoaded).toBeTruthy();
      expect(newState.launchStatus).toEqual([launchStatus]);
    });
  });
});
