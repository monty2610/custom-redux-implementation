function createStore(reducerFn){
  let state = {};
  const listeners = [];

  function dispatch(action) {
    state = reducerFn(state, action);
    listeners.forEach(listener => listener(getState()));
  }

  function getState(){
    return Object.assign({}, state);
  }

  function subscribe(listernerFunc){
    const index = listeners.push(listernerFunc);

    return () => {
      console.log('unsubscribing function');
      listeners = listeners.splice(index, 1);
    }
  }

  dispatch({});
  console.log('store created with initial state:', getState());

  return {
    dispatch, getState, subscribe
  }
}

function combineReducers(reducers){
  return (state, action) => {
    const reducerKeys = Object.keys(reducers);
    return reducerKeys.reduce((currentState, key) => {
      currentState[key] = reducers[key](state[key], action);
      return currentState;
    }, {});
  }
}

export {createStore, combineReducers};
