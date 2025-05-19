import React from "react";
const MoneySendFlow_01: React.FC<
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
        d="M22.75 2.252H1.25v15.5H7v-2.75h10v2.75h5.75zm-20 1.5h3.18a4 4 0 0 1-3.18 3.18zm18.5 3.18a4 4 0 0 1-3.18-3.18h3.18zM12 13.002a3 3 0 1 1 0-6 3 3 0 0 1 0 6m-9.25.07a4 4 0 0 1 3.18 3.18H2.75zm15.32 3.18a4 4 0 0 1 3.18-3.18v3.18z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.25 19.749h1.5v-3.5h-1.5zm3 2h1.5v-5.5h-1.5zm3-2h1.5v-3.5h-1.5z"
      />
    </svg>
  );
};
export default MoneySendFlow_01;
