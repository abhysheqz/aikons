import React from "react";
const SquareArrowDown_03: React.FC<
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
        d="M21.5 4.5v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 17h8M12 14V7m0 7 2.5-2.5M12 14l-2.5-2.5"
      />
    </svg>
  );
};
export default SquareArrowDown_03;
