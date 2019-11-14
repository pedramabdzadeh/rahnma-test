import {Action, createReducer, on} from '@ngrx/store';
import * as StepActions from '../actions/step.actions';
import {StepState, initialStepState} from '../states/step.state';


const reducer = createReducer(
  initialStepState,
  on(StepActions.next, state => ({...state, step: state.step + 1})),
  on(StepActions.previous, state => ({...state, step: state.step - 1}))
);

export function stepReducer(state: StepState | undefined, action: Action) {
  return reducer(state, action);
}
