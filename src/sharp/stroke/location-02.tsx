import React from "react";
const Location_02: React.FC<
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
        d="M21 11c0 7-9 11-9 11s-9-4-9-11a9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};
export default Location_02;
