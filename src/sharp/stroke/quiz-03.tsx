import React from "react";
const Quiz_03: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16.5 1.999h-9v3.5h9z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M7.5 3.499H4v18.5h16v-18.5h-3.5M6.5 10h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m13.5 11 1 1 3-3M6.5 16h4M13.5 17l1 1 3-3"
      />
    </svg>
  );
};
export default Quiz_03;
