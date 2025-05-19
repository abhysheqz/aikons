import React from "react";
const Vynil_02: React.FC<
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
        strokeWidth={1.5}
        d="M21.5 12.5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10c1.169 0 2.29.2 3.333.569"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 0V1.5c.333.5.6 2.6 3 3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
      />
    </svg>
  );
};
export default Vynil_02;
