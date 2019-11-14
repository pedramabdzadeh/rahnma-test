import {Action, createReducer, on} from '@ngrx/store';
import {initialProjectState, ProjectState} from '../states/project.state';
import * as ProjectActions from '../actions/project.actions';

const reducer = createReducer(
  initialProjectState,
  on(ProjectActions.getProjectSuccess, (state: ProjectState, action) =>
    ({...state, projects: action.payload}))
);

export function projectReducer(state: ProjectState | undefined, action: Action) {
  return reducer(state, action);
}
