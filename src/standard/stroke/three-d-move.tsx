import React from "react";
const ThreeDMove: React.FC<
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
        d="m12 14 5.5 5M12 14l-5.5 5m5.5-5V7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 21.5 4.5 16 8 22zM22 21.5 19.5 16 16 22zM12.04 2 8.5 6.969l7 .031z"
      />
    </svg>
  );
};
export default ThreeDMove;
