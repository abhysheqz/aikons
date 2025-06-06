import React from "react";
const StarOff: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM12 1.75a.75.75 0 0 1 .7.483l2.359 6.18 6.478.316a.75.75 0 0 1 .458 1.313l-4.483 3.935-7.74-7.74 1.527-4.004A.75.75 0 0 1 12 1.75"
      />
      <path
        fill="currentColor"
        d="M18.877 21.31a.75.75 0 0 1-1.15.808L12 18.188l-5.727 3.93a.75.75 0 0 1-1.15-.807l1.812-6.942-4.93-4.327a.75.75 0 0 1 .458-1.313l5.974-.292 9.58 9.58z"
      />
    </svg>
  );
};
export default StarOff;
