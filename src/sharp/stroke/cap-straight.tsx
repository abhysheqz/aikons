import React from "react";
const CapStraight: React.FC<
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
        d="M21 5H5.5v4.5M21 19H5.5v-4.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM8 12h13"
      />
    </svg>
  );
};
export default CapStraight;
