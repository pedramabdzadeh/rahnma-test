import {Action, createReducer, on} from '@ngrx/store';
import * as StepActions from '../actions/step.actions';
import {StepState, initialStepState, initialState} from '../states/step.state';


const reducer = createReducer(
  initialState,
  on(StepActions.next, state => state + 1),
  on(StepActions.previous, state => state - 1)
);

export function stepReducer(state, action: Action) {
  // console.log(state.step);
  return reducer(state, action);
}
