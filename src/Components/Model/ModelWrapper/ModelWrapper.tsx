import React, { useCallback } from "react";
import styles from "./ModelWrapper.module.css";
import ModelsContext, { CarModel } from "../ModelsContext";
import ModelOverlay from "../ModelOverlay/ModelOverlay";
const ModelWrapper: React.FC = ({ children }) => {
  const [registeredModels, setRegisteredModels] = React.useState<CarModel[]>(
    []
  );
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels((state) => [...state, model]);
  }, []);
  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((state) =>
      state.filter((model) => model.modelName !== modelName)
    );
  }, []);
  const getModelByName = useCallback(
    (modelName: string) => {
      return (
        registeredModels.find((item) => item.modelName === modelName) || null
      );
    },
    [registeredModels]
  );
  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <div className={styles.container} ref={wrapperRef}>
        <div className={styles.overlay}>
          {registeredModels.map((item) => {
            return (
              <ModelOverlay key={item.modelName} model={item}>
                {item.overlayNode}
              </ModelOverlay>
            );
          })}
        </div>
        {children}
      </div>
    </ModelsContext.Provider>
  );
};

export default ModelWrapper;
