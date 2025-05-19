import React from "react";
const Pool: React.FC<
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
        d="M22 21h-1c-1.451 0-2.722-.859-3-2-.278 1.141-1.549 2-3 2s-2.722-.859-3-2c-.278 1.141-1.549 2-3 2s-2.722-.859-3-2c-.278 1.141-1.549 2-3 2H2M19 3l-.265.088c-1.32.44-1.98.66-2.357 1.184S16 5.492 16 6.883V17M11 3l-.265.088c-1.32.44-1.98.66-2.357 1.184S8 5.492 8 6.883V17M8 7h8m-8 4h8m-8 4h8"
      />
    </svg>
  );
};
export default Pool;
