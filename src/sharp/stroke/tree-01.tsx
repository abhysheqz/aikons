import React from "react";
const Tree_01: React.FC<
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
        d="M15 17.419A8.003 8.003 0 0 0 12 2a8 8 0 0 0-3 15.419"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10 22h2m0 0h2m-2 0v-7m0 0 2.5-2.5M12 15v-2m0 0V9m0 4-2.5-2.5"
      />
    </svg>
  );
};
export default Tree_01;
