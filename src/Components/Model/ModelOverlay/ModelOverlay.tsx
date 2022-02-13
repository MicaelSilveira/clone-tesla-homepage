import React from "react";
import useWrapperScroll from "../../Hooks/UseWrapperScroll";
import styles from "./ModelOverlay.module.css";
import { CarModel } from "../ModelsContext";
import { useTransform, motion } from "framer-motion";
interface props {
  model: CarModel;
}
type SectionDimensions = Pick<HTMLDivElement, "offsetTop" | "offsetHeight">;
const ModelOverlay: React.FC<props> = ({ model, children }) => {
  const { scrollY } = useWrapperScroll();
  const getSectionDimensions = React.useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight,
    } as SectionDimensions;
  }, [model.sectionRef]);
  const [dimensions, setDimesions] = React.useState<SectionDimensions>(
    getSectionDimensions()
  );
  React.useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimesions(getSectionDimensions()));
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const sectionScrollProgress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight
  );
  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  );
  const pointerEvents = useTransform(opacity, (value) =>
    value > 0 ? "auto" : "none"
  );
  return (
    <motion.div
      style={{ opacity, pointerEvents }}
      className={styles.modelOverlay}
    >
      {children}
    </motion.div>
  );
};

export default ModelOverlay;
