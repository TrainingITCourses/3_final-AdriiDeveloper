import { NgModule } from '@angular/core';

import { reducers, metaReducers } from '@app/core/reducers';

import { ServiceWorkerModule } from '@angular/service-worker';

import { LaunchesEffects } from '@app/core/reducers/launches/launches.effects';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { LaunchStatusEffects } from '@app/core/reducers/launch-status/launch-status.effects';

import { environment } from '@env/environment';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([LaunchStatusEffects, LaunchesEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
