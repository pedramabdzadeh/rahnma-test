import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {stepReducer} from './step.reducer';
import {AppState} from '../states/app.state';
import {projectReducer} from './project.reducer';


export const reducers: ActionReducerMap<AppState, any> = {
  steps: stepReducer,
  projects: projectReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
