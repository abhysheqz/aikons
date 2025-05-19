import React from "react";
const EightSquare: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.747 1.75h-20.5v20.5h20.5zM10.497 9.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 0 1-1.5-1.5m6 0a3.5 3.5 0 0 1-1.05 2.5 3.5 3.5 0 0 1-2.45 6h-1a3.5 3.5 0 0 1-2.45-6 3.5 3.5 0 0 1 2.45-6h1a3.5 3.5 0 0 1 3.5 3.5m-4.5 3.5h1a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 1 1 0-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EightSquare;
