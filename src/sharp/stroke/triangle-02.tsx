import React from "react";
const Triangle_02: React.FC<
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
        d="M8.111 9 12 2l3.889 7m-10 4L2 20h7.5m8.611-7L22 20h-7.5M12 18v4M18.965 10 15.5 12M5 10l3.464 2"
      />
    </svg>
  );
};
export default Triangle_02;
