import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { rootReducer } from 'src/store';

// Redux store type
export type RootState = ReturnType<typeof rootReducer>;

// common action
export interface CommonActionType<T> extends Action<T> {
  payload?: object;
}

// generic Thunk return type
export type ThunkReturnType<
  R,
  A extends Action,
  E = void
> = ThunkAction<R, RootState, E, A>;
