import React from "react";
const SquareArrowRightDouble: React.FC<
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
        d="M1.75 4.5A2.75 2.75 0 0 1 4.5 1.75h15a2.75 2.75 0 0 1 2.75 2.75v15a2.75 2.75 0 0 1-2.75 2.75h-15a2.75 2.75 0 0 1-2.75-2.75zm5.256 2.936a.75.75 0 0 1 1.058.07l3.5 4a.75.75 0 0 1 0 .988l-3.5 4a.75.75 0 0 1-1.128-.988L10.003 12 6.936 8.494a.75.75 0 0 1 .07-1.058m6.558.07a.75.75 0 1 0-1.128.988L15.503 12l-3.067 3.506a.75.75 0 1 0 1.128.988l3.5-4a.75.75 0 0 0 0-.988z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowRightDouble;
