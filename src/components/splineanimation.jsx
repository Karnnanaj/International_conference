import React, { useEffect, useRef, useState } from "react";

const SplineRuntimeWrapper = ({ scene, width = 1920, height = 1080 }) => {
  const containerRef = useRef(null);
  const [runtimeLoaded, setRuntimeLoaded] = useState(false);

  // Wait for the global SplineRuntime to load
  useEffect(() => {
    const checkRuntime = () => {
      if (window.SplineRuntime) {
        setRuntimeLoaded(true);
      } else {
        setTimeout(checkRuntime, 100);
      }
    };
    checkRuntime();
  }, []);

  // Once loaded, initialize the runtime on the container
  useEffect(() => {
    if (runtimeLoaded && containerRef.current) {
      window.SplineRuntime.init(containerRef.current, {
        scene,
        width,
        height,
      });
    }
  }, [runtimeLoaded, scene, width, height]);

  return (
    <div
      ref={containerRef}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {!runtimeLoaded && <div>Loading Spline...</div>}
    </div>
  );
};

export default SplineRuntimeWrapper;
