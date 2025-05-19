import React from "react";
const KeyframesDouble: React.FC<
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
        d="M13.5 5.714 15 4l7 8-7 8-1.5-1.714"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M16 12 9 4l-7 8 7 8z" />
    </svg>
  );
};
export default KeyframesDouble;
