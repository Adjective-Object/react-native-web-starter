import { merge } from '../lib/object-map';

const addTextReducer = (state, action) =>
  merge(state, { text: state.text.concat([ action.text ]) });

export default addTextReducer;
