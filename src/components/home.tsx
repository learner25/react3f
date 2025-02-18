import React, { useState, useRef } from "react";
import SceneViewer from "./SceneViewer";
import ControlPanel from "./ControlPanel";

const Home = () => {
  const [isRotating, setIsRotating] = useState(true);
  const controlsRef = useRef<any>(null);

  const handleToggleRotation = () => {
    setIsRotating(!isRotating);
  };

  const handleResetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="relative w-full h-screen bg-background">
      <div className="absolute inset-0">
        <SceneViewer isRotating={isRotating} />
      </div>
      <ControlPanel
        isRotating={isRotating}
        onToggleRotation={handleToggleRotation}
        onResetCamera={handleResetCamera}
      />
    </div>
  );
};

export default Home;
