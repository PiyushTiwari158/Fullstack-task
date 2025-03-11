const gradientStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "70vw",
  height: "40px",
  background:
    "linear-gradient(90deg, rgba(0, 122, 255, 0.7), rgba(169, 5, 182, 0.7), rgba(255, 45, 85, 0.7), rgba(255, 149, 0, 0.7))",
  transformOrigin: "center top",
  transform: "translate(-50%, -50%) scaleY(0)",
  transition: "opacity 2s ease-out, transform 2s ease-out",
  opacity: "0",
  maskImage:
    "linear-gradient(to bottom, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)",
  WebkitMaskImage:
    "linear-gradient(to bottom, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)",
};

export { gradientStyle };
