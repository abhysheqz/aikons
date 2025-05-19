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
        d="M22 21h-1c-1.451 0-2.722-.859-3-2-.278 1.141-1.549 2-3 2s-2.722-.859-3-2c-.278 1.141-1.549 2-3 2s-2.722-.859-3-2c-.278 1.141-1.549 2-3 2H2M18 3l-1.414 1.414A2 2 0 0 0 16 5.828V17M10 3 8.586 4.414A2 2 0 0 0 8 5.828V17M8 7h8m-8 4h8m-8 4h8"
      />
    </svg>
  );
};
export default Pool;
