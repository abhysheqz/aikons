import React from "react";
const Rar_01: React.FC<
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
        d="M20 13V9l-7-7H4v11m9-10.5V9h6.5M4 19v-3h2a1.5 1.5 0 0 1 0 3h-.5M4 19v3m0-3h1.5m0 0 2 3m9-3v-3h2a1.5 1.5 0 0 1 0 3H18m-1.5 0v3m0-3H18m0 0 2 3m-10 0 1.75-6h.5L14 22m-3-2h2"
      />
    </svg>
  );
};
export default Rar_01;
