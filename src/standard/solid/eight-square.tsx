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
        d="M4.997 1.75a2.75 2.75 0 0 0-2.75 2.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm5.5 7.75a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 0 1-1.5-1.5m6 0a3.5 3.5 0 0 1-1.05 2.5 3.5 3.5 0 0 1-2.45 6h-1a3.5 3.5 0 0 1-2.45-6 3.5 3.5 0 0 1 2.45-6h1a3.5 3.5 0 0 1 3.5 3.5m-4.5 3.5h1a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 1 1 0-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EightSquare;
