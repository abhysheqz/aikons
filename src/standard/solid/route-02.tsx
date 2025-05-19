import React from "react";
const Route_02: React.FC<
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
        d="M18 1.25c-2.632 0-4.75 2.158-4.75 4.8 0 1.536.785 2.762 1.631 3.637.848.878 1.821 1.474 2.36 1.768.475.26 1.043.26 1.518 0 .539-.294 1.512-.89 2.36-1.768.846-.875 1.631-2.1 1.631-3.637 0-2.642-2.118-4.8-4.75-4.8m0 3a1.75 1.75 0 1 0 0 3.5h.009a1.75 1.75 0 1 0 0-3.5zM1.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M5 10c0-2.348 2.165-4 4.5-4H11a1 1 0 1 1 0 2H9.5C7.97 8 7 9.034 7 10s.97 2 2.5 2h3c2.335 0 4.5 1.652 4.5 4s-2.165 4-4.5 4H11a1 1 0 1 1 0-2h1.5c1.53 0 2.5-1.035 2.5-2s-.97-2-2.5-2h-3C7.165 14 5 12.348 5 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Route_02;
