import React from "react";
const TransitionLeft: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 20V4a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1M7 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3M6 12l3-3m-3 3 3 3m-3-3h8"
      />
    </svg>
  );
};
export default TransitionLeft;
