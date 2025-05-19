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
        strokeWidth={1.5}
        d="m8 15.5 4 4.5 4-4.5-4-4.5zM12 8V4m0 0h9m-9 0H3"
      />
    </svg>
  );
};
export default KeyframeTop;
