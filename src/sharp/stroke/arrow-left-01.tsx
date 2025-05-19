import React from "react";
const ArrowLeft_01: React.FC<
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
        strokeMiterlimit={16}
        strokeWidth={1.5}
        d="m15 6-6 6 6 6"
      />
    </svg>
  );
};
export default ArrowLeft_01;
