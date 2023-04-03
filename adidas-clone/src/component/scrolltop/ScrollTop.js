import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollTop = (props) => {
  let location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{props.children}</>
};
export default ScrollTop