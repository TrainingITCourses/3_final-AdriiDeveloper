import { Injectable } from '@angular/core';

import { LaunchesService } from '@app/core/services';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { mergeMap, map } from 'rxjs/operators';

import { LaunchesLoaded, LaunchesActionTypes } from './launches.actions';

@Injectable()
export class LaunchesEffects {

  @Effect()
  loadLaunches$ = this.actions$
    .pipe(
      ofType(LaunchesActionTypes.LoadLaunches),
      mergeMap(() =>
        this.launchesService.getLaunches$().pipe(map(launches => new LaunchesLoaded(launches)))
      )
    );

  constructor(private actions$: Actions,
              private launchesService: LaunchesService) {}
}
