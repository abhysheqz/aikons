import React from "react";
const KeyframeLeft: React.FC<
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
        d="m15.5 8 4.5 4-4.5 4-4.5-4zM8 12H4m0 0v9m0-9V3"
      />
    </svg>
  );
};
export default KeyframeLeft;
