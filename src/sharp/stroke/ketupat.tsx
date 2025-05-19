import React from "react";
const Ketupat: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20.998 13.5-8.5-8.5-8.5 8.5 8.5 8.5zM16.498 9l-4 4m0 0-4 4m4-4-4-4m4 4 4 4M15.5 2c-2.4.24-3 2.3-3 3-.167-.6-1-1.8-3-1.8"
      />
    </svg>
  );
};
export default Ketupat;
