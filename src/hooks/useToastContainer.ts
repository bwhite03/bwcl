import { useState, useEffect } from "react";
import { generateToastId, getToastContainerPosition } from "../utils";
import { toastManager } from "../core";
import { ToastPosition } from "../types";

export const useToastContainer = (position: ToastPosition) => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`toast-portal-${generateToastId()}`);

  const containerStyles = getToastContainerPosition(position);
  useEffect(() => {
    const div = document.createElement("div");
    div.id = portalId;
    div.setAttribute("style", containerStyles);
    document.getElementsByTagName("body")[0].prepend(div);
    setLoaded(true);
    toastManager.setContainerId(portalId);

    return () => {
      document.getElementsByTagName("body")[0].removeChild(div);
    };
  }, [portalId]);

  return {
    portalId,
    loaded,
  };
};
