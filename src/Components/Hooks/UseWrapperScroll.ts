import React, { useContext } from "react";
import { useMotionValue } from "framer-motion";
import ModelsContext from "../Model/ModelsContext";
const useWrapperScroll = () => {
  const { wrapperRef } = useContext(ModelsContext);
  const scrollY = useMotionValue(0);
  const scrollYprogress = useMotionValue(0);
  React.useEffect(() => {
    const element = wrapperRef.current!;
    if (element) {
      const updateScrollValue = () => {
        if (element) {
          const { scrollTop, scrollHeight, offsetHeight } = wrapperRef.current;
          const fullScroll = scrollHeight - offsetHeight;
          scrollY.set(scrollTop);
          scrollYprogress.set(scrollTop / fullScroll);
        }
      };
      element.addEventListener("scroll", updateScrollValue);
      return () => element.removeEventListener("scroll", updateScrollValue);
    }
  }, [scrollY, scrollYprogress, wrapperRef]);
  return { scrollY, scrollYprogress };
};

export default useWrapperScroll;
