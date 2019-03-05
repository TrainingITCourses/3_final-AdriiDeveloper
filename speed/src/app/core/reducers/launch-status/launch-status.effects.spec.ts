import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LaunchStatusEffects } from './launch-status.effects';

describe('LaunchStatusEffects', () => {
  let actions$: Observable<any>;
  let effects: LaunchStatusEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LaunchStatusEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LaunchStatusEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
