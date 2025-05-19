import React from "react";
const Txt_01: React.FC<
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
        d="M20 13V9l-7-7H4v11m9-10.5V9h6.5M10 16l2 3m0 0 2 3m-2-3 2-3m-2 3-2 3m6.5-6h1.75m0 0H20m-1.75 0v6M4 16h1.75m0 0H7.5m-1.75 0v6"
      />
    </svg>
  );
};
export default Txt_01;
