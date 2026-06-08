import { useEffect, useRef } from "react";
import { mount } from "@efanworks/babel-exp/mount";

export const Loader = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    mount(rootRef.current);
  }, []);

  return <div ref={rootRef}></div>;
};
