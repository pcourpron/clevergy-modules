import { useEffect, useState } from "react";

export const useGetColors = (element: HTMLElement) => {
  const [colors, setColors] = useState<{ [key: string]: any }>();

  useEffect(() => {
    const targetNode = element;
    if (targetNode.dataset) {
      if (targetNode.dataset["colorpalette"]) {
        try {
          setColors(JSON.parse(targetNode.dataset["colorpalette"]));
        } catch (e) {
          console.log(e);
        }
      }
    }
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          const targetNode = element;
          if (targetNode.dataset) {
            if (targetNode.dataset["colorpalette"]) {
              try {
                setColors(JSON.parse(targetNode.dataset["colorpalette"]));
              } catch (e) {
                console.log(e);
              }
            }
          }
        }
      });
    });
    const config = { attributes: true };

    observer.observe(targetNode, config);

    return () => {
      observer.disconnect();
    };
  }, [element]);
  return colors;
};
