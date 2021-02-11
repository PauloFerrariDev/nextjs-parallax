import React from "react";

export interface ParallaxLayerProps {
  fileName: string;
  dataDepth: string;
  dataInvert: boolean;
}

const ParallaxLayer = (props: ParallaxLayerProps) => {
  return (
    <div
      className="layer"
      data-depth={props.dataDepth}
      data-invert-x={props.dataInvert}
      data-invert-y={props.dataInvert}
    >
      <img src={`/images/${props.fileName}.png`} alt={props.fileName} />
    </div>
  );
};

export default ParallaxLayer;
