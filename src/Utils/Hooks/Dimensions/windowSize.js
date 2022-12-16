import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { __ClientSize, __CLIENT_SIZE } from '../../../Redux/Actions/session';


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
    type: __CLIENT_SIZE
  };
}

export default function useWindowDimensions() {

  const dispatch = useDispatch()

  const [flag, setFlag] = useState(null)

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    async function handleResize() {
      dispatch(getWindowDimensions())
      return setWindowDimensions(getWindowDimensions());
    }

    if(!flag){
      handleResize()
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return 'Status Loaded';
}