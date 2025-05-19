import React from "react";
const PointingLeft_02: React.FC<
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
        d="M22 19.892h-2l-2.31 1.106c-1.478.707-4.367 1.675-5.728.323C9.817 19.189 9.424 16.208 9.5 14.5H3.75a1.75 1.75 0 1 1 0-3.5H10m0 0h4m-4 0c.018-.024 2.175-2.878 3.609-3.376 1.283-.446 2.425.408 3.482 1.05C17.911 9.173 20.5 11 20.5 11H22M8 4.5H2.694M4.5 2 2 4.5 4.5 7"
      />
    </svg>
  );
};
export default PointingLeft_02;
