import React from "react";
const Notebook_01: React.FC<
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
        d="M8 2.25A3.75 3.75 0 0 0 4.25 6v12A3.75 3.75 0 0 0 8 21.75h10A3.75 3.75 0 0 0 21.75 18V6A3.75 3.75 0 0 0 18 2.25zm2 4A1.75 1.75 0 0 0 8.25 8v2c0 .966.784 1.75 1.75 1.75h6A1.75 1.75 0 0 0 17.75 10V8A1.75 1.75 0 0 0 16 6.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 6a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notebook_01;
