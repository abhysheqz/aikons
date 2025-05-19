import React from "react";
const BorderAll_01: React.FC<
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
        d="M3 21h18V3H3zM12 3v4m0 10v4m-2.7-9h5.4m2.3 0h4M3 12h4m5-2.7v5.4"
      />
    </svg>
  );
};
export default BorderAll_01;
