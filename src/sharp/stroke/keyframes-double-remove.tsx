import React from "react";
const KeyframesDoubleRemove: React.FC<
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
        d="M7 6.286 9 4l7 8-7 8-2-2.286"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.5 5.714 15 4l7 8-7 8-1.5-1.714M2 12h7"
      />
    </svg>
  );
};
export default KeyframesDoubleRemove;
