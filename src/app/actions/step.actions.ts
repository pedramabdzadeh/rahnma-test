import {createAction, props} from '@ngrx/store';

export const next = createAction(
  '[number] Next',
  props<{step: number}>()
);

export const previous = createAction(
  '[number] Previous',
  props<{step: number}>()
);
