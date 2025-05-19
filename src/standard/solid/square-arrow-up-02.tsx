import React from "react";
const SquareArrowUp_02: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm7.5 5.5a.75.75 0 0 1 .53.22l2.5 2.5a.75.75 0 0 1-1.06 1.06l-1.22-1.22v6.21a.75.75 0 0 1-1.5 0V9.81l-1.22 1.22a.75.75 0 0 1-1.06-1.06l2.5-2.5a.76.76 0 0 1 .53-.22"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowUp_02;
