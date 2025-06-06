import React from "react";
const KeyframeTop: React.FC<
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
        d="M3 3h9m0 0h9m-9 0v3.5M11.204 20.64a1.062 1.062 0 0 0 1.592 0l3.924-4.402a1.114 1.114 0 0 0 0-1.476l-3.924-4.403a1.062 1.062 0 0 0-1.592 0L7.28 14.762a1.113 1.113 0 0 0 0 1.476z"
      />
    </svg>
  );
};
export default KeyframeTop;
