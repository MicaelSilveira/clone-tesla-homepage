import React from "react";
import useModel from "../../Hooks/UseModel";
import styles from "./ModelSection.module.css";
interface props {
  overlayNode: React.ReactNode;
  modelName: string;
}
const ModelSection: React.FC<props> = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  const { registerModel } = useModel(modelName);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (sectionRef.current)
      registerModel({
        modelName,
        overlayNode,
        sectionRef,
      });
  }, [modelName, overlayNode, sectionRef]);
  return (
    <div className={`${styles.container} colored`} ref={sectionRef} {...props}>
      {children}
    </div>
  );
};

export default ModelSection;
