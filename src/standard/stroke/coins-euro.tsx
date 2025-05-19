import React from "react";
const CoinsEuro: React.FC<
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
        d="M14 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16M3.157 11A7.111 7.111 0 0 0 13 20.843"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 7.5c-.5-1-1.306-1.5-2.394-1.5A2.606 2.606 0 0 0 12 8.606v2.788A2.606 2.606 0 0 0 14.606 14c1.088 0 1.894-.5 2.394-1.5M11 10h4"
      />
    </svg>
  );
};
export default CoinsEuro;
