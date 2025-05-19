import React from "react";
const SquareArrowLeftDouble: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm7.063 6.744a.75.75 0 0 0-1.13-.988l-3.5 4a.75.75 0 0 0 0 .988l3.5 4a.75.75 0 0 0 1.13-.988L8.495 12zm5.5 0a.75.75 0 0 0-1.13-.988l-3.5 4a.75.75 0 0 0 0 .988l3.5 4a.75.75 0 0 0 1.13-.988L13.995 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowLeftDouble;
