import React from "react";
const MouseRightClick_04: React.FC<
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
        d="M10.5 6V2M10.5 22c6 0 7.5-4.51 7.5-10S16.5 2 10.5 2 3 6.51 3 12s1.5 10 7.5 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6H9v4h3zM19 2c1.055 1.132 1.765 2.501 2 4"
      />
    </svg>
  );
};
export default MouseRightClick_04;
