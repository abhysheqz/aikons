import React from "react";
const ArrowDownLeft_02: React.FC<
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
        d="M9.535 14.464 17.997 6m-11.29 5.636L6 18l6.363-.708z"
      />
    </svg>
  );
};
export default ArrowDownLeft_02;
