import React, { useCallback } from "react";
import ModelsContext from "../Model/ModelsContext";
const useModel = (modelName: string) => {
  const { registerModel, unregisterModel, getModelByName } =
    React.useContext(ModelsContext);
  React.useEffect(function () {
    return () => unregisterModel(modelName);
  }, []);
  const getModel = useCallback(
    () => getModelByName(modelName),
    [modelName, getModelByName]
  );
  return { getModel, registerModel };
};
export default useModel;
