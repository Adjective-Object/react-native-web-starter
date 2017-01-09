import reduxLoadReducer from './redux-storage-load';
import addTextReducer from './add-text';
import removeTextReducer from './remove-text';

/* Application state is of form
{
    state: "uninitialized" / "loaded",
    text: []
}
*/
export const actionReducers = {};
actionReducers['REDUX_STORAGE_LOAD'] = reduxLoadReducer;
actionReducers['ADD_TEXT'] = addTextReducer;
actionReducers['REMOVE_TEXT'] = removeTextReducer;

export const getInitialState = () => ({
  initializationState: 'uninitialized',
  text: [ 'welcome to this this' ],
});

export default function applicationReducer(state, action) {
  console.log('state ', state);
  console.log('action', action);
  const reducer = actionReducers[action.type];
  if (reducer === undefined) {
    console.log('no reducer registered, ignoring action');
    return state || getInitialState();
  }

  const newState = reducer(state, action);
  console.log('result', newState);
  return newState;
}
