import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectSettingsComponent } from './components/project-settings/project-settings.component';
import { DeliveryDetailsComponent } from './components/delivery-details/delivery-details.component';
import { PreviewComponent } from './components/preview/preview.component';
import { StepsComponent } from './components/steps/steps.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import {ProjectEffects} from './effects/project.effects';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProjectDetailsComponent,
    ProjectSettingsComponent,
    DeliveryDetailsComponent,
    PreviewComponent,
    StepsComponent,
    ProjectsComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects, ProjectEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
