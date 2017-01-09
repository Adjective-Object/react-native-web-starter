import { merge } from '../lib/object-map';

const addTextReducer = (state, action) =>
  merge(state, { text: [ 'I deleted all the sample text' ] });

export default addTextReducer;
