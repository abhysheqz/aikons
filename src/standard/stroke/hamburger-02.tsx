import React from "react";
const Hamburger_02: React.FC<
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
        d="M20.5 11v-1a6 6 0 0 0-6-6h-5a6 6 0 0 0-6 6v1M20.5 15a5 5 0 0 1-5 5h-7a5 5 0 0 1-5-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15h8a2 2 0 1 0 0-4h-8m-6 4H4a2 2 0 1 1 0-4h2m0 0 3 3 3-3m-6 0h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.009 8H9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 7-1 1"
      />
    </svg>
  );
};
export default Hamburger_02;
