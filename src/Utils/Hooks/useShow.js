import { useState } from 'react';

const useShow = (initialState) => {
  const [showState, setShowState] = useState(initialState);

  return {
    state: showState,
    hide: () => setShowState(false),
    show: () => setShowState(true),
    toggle: () => setShowState((old) => !old),
    changeWhenStateIsTrue: () => showState && setShowState((old) => !old),
    changeWhenStateIsFalse: () => !showState && setShowState((old) => !old),
  };
};

export default useShow;
