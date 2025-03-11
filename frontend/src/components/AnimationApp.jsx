import React from "react";
import { buttonStyle } from "./button-style";
import { gradientStyle } from "./gradient-style";
const AnimationApp = () => {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const gradientRef = React.useRef(null);

  React.useEffect(() => {
    if (isAnimating) {
      gradientRef.current.style.width = "100vw";
      gradientRef.current.style.height = "60px";
      gradientRef.current.style.opacity = "0";
      gradientRef.current.style.transform = "translate(-50%, -50%) scaleY(0)";

      setTimeout(() => {
        gradientRef.current.style.opacity = "0.8";
        gradientRef.current.style.transform =
          "translate(-50%, -50%) scaleY(1.5)";
      }, 100);

      setTimeout(() => {
        gradientRef.current.style.opacity = "0";
        gradientRef.current.style.transform = "translate(-50%, -50%) scaleY(0)";
      }, 3000);
    } else {
      if (gradientRef.current) {
        gradientRef.current.style.opacity = "0";
        gradientRef.current.style.transform = "translate(-50%, -50%) scaleY(0)";
      }
    }
  }, [isAnimating]);

  const startAnimation = () => setIsAnimating(true);
  const stopAnimation = () => setIsAnimating(false);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div ref={gradientRef} style={gradientStyle} />
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <button onClick={startAnimation} style={buttonStyle}>
          Start
        </button>
        <button
          onClick={stopAnimation}
          style={{ ...buttonStyle, backgroundColor: "#f44336" }}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default AnimationApp;
