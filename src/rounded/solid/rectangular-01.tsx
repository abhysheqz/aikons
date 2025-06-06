import React from "react";
const Rectangular_01: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.231 4.29c0-.539 0-.809-.17-.89-.169-.082-.38.085-.803.42l-4.564 3.62c-.113.089-.17.134-.199.196-.03.061-.03.134-.03.279v14.029a.75.75 0 0 0 .988.71c.29-.096.53-.279.758-.454l2.433-1.856c.45-.342.847-.645 1.11-.908.137-.137.289-.31.387-.522.084-.18.13-.391.1-.617l-.01-.069V4.29m-6.918 2.33a.6.6 0 0 1-.17.113c-.047.017-.1.017-.203.017H5.457c-.578 0-1.084 0-1.459-.048a2 2 0 0 1-.624-.17 1.1 1.1 0 0 1-.56-.607 1.08 1.08 0 0 1 .045-.839c.098-.211.25-.385.387-.522.263-.263.66-.566 1.11-.908L6.789 1.8c.229-.175.467-.358.758-.455.288-.096.59-.096.883-.095h10.09c.494 0 .928 0 1.269.026l.133.012c.303.032.454.048.51.241.057.194-.084.306-.367.53z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.734 4.922a.97.97 0 0 1 .967.972v13.179s2.14-1.644 2.19-1.68V9.136a.97.97 0 0 1 .966-.973.97.97 0 0 1 .966.973v7.78h4.556a.97.97 0 0 1 .967.972.97.97 0 0 1-.967.973l-5.214.007-2.536 1.937 10.08-.008a.965.965 0 0 1 1.21.618.974.974 0 0 1-.61 1.23c-.318.107-.649.106-.925.105H5.595c-.547 0-1.05 0-1.428-.048a2.1 2.1 0 0 1-.68-.19 1.3 1.3 0 0 1-.66-.724 1.27 1.27 0 0 1-.059-.651V5.894a.97.97 0 0 1 .966-.972"
      />
    </svg>
  );
};
export default Rectangular_01;
