import React from "react";
const Award_02: React.FC<
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
        d="M11 18v-6h2v6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v2.75H18v2H6v-2h1.25zM12 1.25a.75.75 0 0 1 .62.328l2.075 3.05 3.519 1.046a.75.75 0 0 1 .382 1.174L16.357 9.78l.1 3.7a.75.75 0 0 1-1.002.726L12 12.968l-3.455 1.238a.75.75 0 0 1-1.003-.726l.101-3.7-2.24-2.932a.75.75 0 0 1 .383-1.174l3.52-1.046 2.074-3.05A.75.75 0 0 1 12 1.25"
      />
    </svg>
  );
};
export default Award_02;
