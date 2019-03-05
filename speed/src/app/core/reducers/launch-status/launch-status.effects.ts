import { Injectable } from '@angular/core';

import { LaunchesService } from '@app/core/services';
import { LaunchStatusActionTypes, LaunchStatusLoaded } from '@app/core/reducers/launch-status/launch-status.actions';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class LaunchStatusEffects {
  @Effect()
  load$ = this.actions$
    .pipe(
      ofType(LaunchStatusActionTypes.LoadLaunchStatus),
      mergeMap(() =>
        this.launchesService.getStatusTypes$().pipe(map(status => new LaunchStatusLoaded(status)))
      )
    );

  constructor(private actions$: Actions,
              private launchesService: LaunchesService) {}
}
