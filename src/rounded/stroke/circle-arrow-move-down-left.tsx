import React from "react";
const CircleArrowMoveDownLeft: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.374 12.531c-.508.63-1.541 1.411-1.357 1.782m0 0c-.103.378.897 1.125 1.359 1.695m-1.36-1.695c2.083.045 3.358-.207 4.588-1.432 1.28-1.275 1.492-2.67 1.388-4.878"
      />
    </svg>
  );
};
export default CircleArrowMoveDownLeft;
