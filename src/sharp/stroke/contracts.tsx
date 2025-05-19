import React from "react";
const Contracts: React.FC<
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
        d="M18 5.5V2H2v20h16v-3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m18 10-5.5 5.5L12 18l2.5-.5L20 12m-2-2 2-2 2 2-2 2m-2-2 2 2M5 19h1l1.25-2.5L8.5 19h1M6 6h8M6 10h6"
      />
    </svg>
  );
};
export default Contracts;
