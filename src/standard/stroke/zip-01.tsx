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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 16h1m0 0h1m-1 0v6m0 0h-1m1 0h1m2.5 0v-6h1.862c.706 0 1.436.352 1.587 1.04.064.29.062.564 0 .852-.155.722-.91 1.108-1.648 1.108H16M5 16h3.5L5 22h3.323M4 12.998l.02-9.002A2 2 0 0 1 6.022 2l6.974.008L20 8.995l-.008 4.003M13 2.498v4.5a2 2 0 0 0 2 2h4.5"
      />
    </svg>
  );
};
export default Zip_01;
