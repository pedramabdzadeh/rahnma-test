import {initialProjectState, ProjectState} from './project.state';
import {initialStepState, StepState} from './step.state';

export interface AppState {
  projects: ProjectState;
  steps: StepState;
}

export const initialAppState: AppState ={
  projects: initialProjectState,
  steps: initialStepState,
};
