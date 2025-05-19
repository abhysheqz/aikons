import React from "react";
const Undo: React.FC<
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
        d="m4.498 5.388-.036-.417-.172-2.054a1 1 0 0 0-1.993.167l.172 2.054.005.06c.058.688.109 1.298.214 1.784.113.525.319 1.056.793 1.464.48.414 1.035.532 1.57.551.487.019 1.08-.042 1.736-.11l.064-.006 2.044-.21a1 1 0 0 0-.204-1.99l-2.044.21c-.35.036-.634.065-.872.084A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2a9.98 9.98 0 0 0-7.502 3.388"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Undo;
