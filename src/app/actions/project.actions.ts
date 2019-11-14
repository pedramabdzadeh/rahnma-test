import {Action, createAction, props} from '@ngrx/store';
import {Project} from '../models/project';

export const add = createAction(
  '[Project] Add',
  props<Project>()
);

export const getProjects = createAction(
  '[Project] Get Projects',
);

export const getProjectSuccess = createAction(
  '[Project] Projects Loaded Success',
  props(),
);

