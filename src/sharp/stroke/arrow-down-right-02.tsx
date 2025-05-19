import React from "react";
const ArrowDownRight_02: React.FC<
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
        d="M14.463 14.464 6 6m11.29 5.636L17.997 18l-6.363-.708z"
      />
    </svg>
  );
};
export default ArrowDownRight_02;
