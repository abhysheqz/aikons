import React from "react";
const Bicycle_01: React.FC<
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
        d="M6 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0M18 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m16.8 8.6-6.019 8a1 1 0 0 1-.799.4H6v-2h3.483l5.718-7.602z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.536 8H5V6h5v2h-.844l4.107 4.854-1.526 1.292zM14.211 3.385A1 1 0 0 1 15 3c1.243 0 2.512.05 3.56.42 1.131.4 2.021 1.18 2.402 2.531l-1.925.543c-.181-.644-.541-.975-1.144-1.188-.428-.151-.958-.233-1.601-.273l2.703 10.723-1.94.488-3.025-12a1 1 0 0 1 .181-.859"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bicycle_01;
