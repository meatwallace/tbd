import * as ls from 'local-storage';
import { TASKS_STATE_KEY } from './consts';
import { State } from '../types';

export function persistState(state: State) {
  ls.set(TASKS_STATE_KEY, state);
}
