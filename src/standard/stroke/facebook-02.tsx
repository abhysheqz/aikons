import React from "react";
const Facebook_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 13.5h4l1-4h-5v-2c0-1.03 0-2 2-2h3V2h-4.357C10.928 2 9 3.657 9 6.7v2.8H5v4h4V22h4z"
      />
    </svg>
  );
};
export default Facebook_02;
