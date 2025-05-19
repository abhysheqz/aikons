import React from "react";
const SquareArrowUpDouble: React.FC<
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
        d="M1.75 4.5A2.75 2.75 0 0 1 4.5 1.75h15a2.75 2.75 0 0 1 2.75 2.75v15a2.75 2.75 0 0 1-2.75 2.75h-15a2.75 2.75 0 0 1-2.75-2.75zm9.756 2.436a.75.75 0 0 1 .988 0l4 3.5a.75.75 0 1 1-.988 1.128L12 8.497l-3.506 3.067a.75.75 0 1 1-.988-1.128zm.986 5.5a.75.75 0 0 0-.988 0l-4 3.5a.75.75 0 1 0 .988 1.128l3.506-3.067 3.506 3.067a.75.75 0 1 0 .988-1.128z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowUpDouble;
