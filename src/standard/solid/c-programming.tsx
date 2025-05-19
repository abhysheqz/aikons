import React from "react";
const CProgramming: React.FC<
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
        d="M5.5 1.75A3.75 3.75 0 0 0 1.75 5.5v13a3.75 3.75 0 0 0 3.75 3.75h13a3.75 3.75 0 0 0 3.75-3.75v-13a3.75 3.75 0 0 0-3.75-3.75zm10.698 6.706c-1.99-1.941-5.206-1.941-7.195 0a4.93 4.93 0 0 0 0 7.088c1.99 1.941 5.206 1.941 7.195 0a1 1 0 0 0-1.396-1.431 3.174 3.174 0 0 1-4.403 0 2.93 2.93 0 0 1 0-4.226 3.174 3.174 0 0 1 4.403 0 1 1 0 0 0 1.396-1.431"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CProgramming;
