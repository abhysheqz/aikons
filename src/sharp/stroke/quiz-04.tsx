import React from "react";
const Quiz_04: React.FC<
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
        d="M20 4h-6a2 2 0 1 0-4 0H4v18h16zM6.5 10h4"
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
export default Quiz_04;
