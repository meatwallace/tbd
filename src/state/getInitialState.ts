import * as ls from 'local-storage';
import { INITIAL_STATE, TASKS_STATE_KEY } from './consts';
import { State } from '../types';

export function getInitialState() {
  return ls.get<State>(TASKS_STATE_KEY) || INITIAL_STATE;
}
