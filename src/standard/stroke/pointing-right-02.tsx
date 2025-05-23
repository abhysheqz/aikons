import React from "react";
const PointingRight_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 20h2l2.31.998c1.477.707 4.367 1.675 5.728.323 2.145-2.132 2.538-5.113 2.462-6.821h5.75a1.75 1.75 0 1 0 0-3.5H14m0 0h-4m4 0c-.011-.015-2.173-2.878-3.609-3.376-1.283-.446-2.425.408-3.482 1.05C6.089 9.173 4 11 4 11H2M22 4.5 19.5 2M22 4.5 19.5 7M22 4.5h-6"
      />
    </svg>
  );
};
export default PointingRight_02;
