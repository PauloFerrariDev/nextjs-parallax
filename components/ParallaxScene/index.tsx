import React, { useRef, useEffect } from "react";
import Parallax from "parallax-js";
import parallaxStyles from "../../styles/parallax.module.css";
import ParallaxLayer, { ParallaxLayerProps } from "../ParallaxLayer";

/**
 * Parallax Documentation
 * @see <https://github.com/wagerfield/parallax>
 */
const ParallaxScene = () => {
  const scene = useRef(null);

  const layers: ParallaxLayerProps[] = [
    { fileName: "text", dataDepth: "0.1", dataInvert: true },
    { fileName: "astronaut", dataDepth: "1.0", dataInvert: true },
    { fileName: "planet1", dataDepth: "0.25", dataInvert: true },
    { fileName: "planet2", dataDepth: "0.4", dataInvert: false },
    { fileName: "rocket", dataDepth: "0.2", dataInvert: true },
  ];

  useEffect(() => {
    const parallaxInstance = new Parallax(scene.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    parallaxInstance.enable();

    // parallaxInstance.friction(0.15, 0.15);

    return () => parallaxInstance.disable();
  }, []);

  return (
    <div ref={scene} className={parallaxStyles.container}>
      {layers.map((layer) => (
        <ParallaxLayer {...layer} />
      ))}
    </div>
  );
};

export default ParallaxScene;
