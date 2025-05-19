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
        strokeWidth={1.5}
        d="M2 19.892h2l2.31 1.106c1.477.707 4.367 1.675 5.728.323 2.145-2.132 2.538-5.113 2.462-6.821h5.75a1.75 1.75 0 1 0 0-3.5H14m0 0h-4m4 0c-.018-.024-2.175-2.878-3.609-3.376-1.283-.446-2.425.408-3.482 1.05C6.089 9.173 3.5 11 3.5 11H2M16 4.5h5.352M19.5 2 22 4.5 19.5 7"
      />
    </svg>
  );
};
export default PointingRight_02;
