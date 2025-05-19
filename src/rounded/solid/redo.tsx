import React from "react";
const Redo: React.FC<
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
        d="M2 12C2 6.477 6.477 2 12 2a9.98 9.98 0 0 1 7.502 3.388l.036-.417.172-2.054a1 1 0 0 1 1.993.167L21.526 5.2c-.058.687-.109 1.297-.214 1.783-.113.525-.319 1.056-.793 1.464-.48.414-1.035.532-1.57.551-.487.019-1.08-.042-1.737-.11l-2.107-.216a1 1 0 0 1 .204-1.99l2.044.21c.35.036.634.065.872.084A8 8 0 1 0 20 12a1 1 0 1 1 2 0c0 5.523-4.477 10-10 10S2 17.523 2 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Redo;
