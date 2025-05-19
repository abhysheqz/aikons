import React from "react";
const Zip_01: React.FC<
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
        d="M11 16h1m0 0h1m-1 0v6m0 0h-1m1 0h1m2.5 0v-6h1.862c.706 0 1.436.352 1.587 1.04.064.29.062.564 0 .852-.155.722-.91 1.108-1.648 1.108H16M5 16h3.5v.5l-3.5 5v.5h3.323M20 13V9l-7-7H4v11m9-10.5V9h6.5"
      />
    </svg>
  );
};
export default Zip_01;
