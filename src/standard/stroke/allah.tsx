import React from "react";
const Allah: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.36 2.533 9 4.5H5.5a1 1 0 0 0-1 1V9l-1.967 2.36a1 1 0 0 0 0 1.28L4.5 15v3.5a1 1 0 0 0 1 1H9l2.36 1.967a1 1 0 0 0 1.28 0L15 19.5h3.5a1 1 0 0 0 1-1V15l1.967-2.36a1 1 0 0 0 0-1.28L19.5 9V5.5a1 1 0 0 0-1-1H15l-2.36-1.967a1 1 0 0 0-1.28 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 10v6m-2.5-6v4.5a1.5 1.5 0 0 1-3 0m0 0V8m0 6.5a1.5 1.5 0 0 1-3 0V10A2.5 2.5 0 0 0 6 12.5v.5"
      />
    </svg>
  );
};
export default Allah;
