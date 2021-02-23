
export default (...listeners) => store => next => action => {
  const preActionState = store.getState();

  next(action);

  setTimeout(() => {
    listeners.forEach(listener => {
      if (listener[action.type]) {
        listener[action.type](action, store.dispatch, preActionState);
      }
    });
  });

};
