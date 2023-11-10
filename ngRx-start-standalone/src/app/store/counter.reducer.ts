import { Action, createReducer, on } from "@ngrx/store";
import { CounterActions, DECREMENT, DecrementAction, INCREMENT, IncrementAction } from "./counter.actions";
// import { increment } from "./counter.actions";

const initialState = 0;

/* export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
); */

export function counterReducer(state = initialState, action: CounterActions | DecrementAction | Action) {
  if (action.type === INCREMENT) {
    return state + (action as IncrementAction).value;
  }
  if (action.type === DECREMENT) {
    return state - (action as DecrementAction).value;
  }
  return state;
}