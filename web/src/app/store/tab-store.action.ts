import { createAction, props } from '@ngrx/store';

export const add = createAction('Add Tab', props<{ tab: string }>());
export const remove = createAction('Remove tab', props<{ tab: string }>());
