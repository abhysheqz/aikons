import React from "react";
const MouseRightClick_06: React.FC<
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
        d="M10.5 5.5V2m0 10V9M10.5 22c6 0 7.5-4.51 7.5-10S16.5 2 10.5 2 3 6.51 3 12s1.5 10 7.5 10ZM18 12H3M18.5 3.5l.881-1.5M19 5.5l2 .5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 5.5H9V9h3z"
      />
    </svg>
  );
};
export default MouseRightClick_06;
