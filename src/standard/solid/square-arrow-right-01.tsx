import React from "react";
const SquareArrowRight_01: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm6.247 5.086a1 1 0 1 0-1.494 1.328L12.663 12l-3.41 3.836a1 1 0 0 0 1.494 1.328l4-4.5a1 1 0 0 0 0-1.328z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowRight_01;
