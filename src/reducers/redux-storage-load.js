import { getInitialState } from './reducer';
import { merge, objectMap } from '../lib/object-map';
import MirroredData from '../lib/mirrored-data';

const isValidState = state =>
  state.text !== undefined &&
    state.text.length > 0 &&
    Array.isArray(state.text);

// TODO do conversions of state subtrees to MirroredData here
const convertCachedState = state => state;

const setInitStateReducer = (state, action) =>
  merge(
    isValidState(action.payload)
      ? convertCachedState(action.payload)
      : getInitialState(),
    { initializationState: 'loaded' },
  );

export default setInitStateReducer;
