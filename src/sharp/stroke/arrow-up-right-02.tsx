import React from "react";
const ArrowUpRight_02: React.FC<
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
        d="m14 10-8 8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.465 9.536 6.003 18m11.29-5.636L18 6l-6.363.708z"
      />
    </svg>
  );
};
export default ArrowUpRight_02;
