import React from "react";
const NoInternet: React.FC<
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
        d="M5 5a9.85 9.85 0 0 0-3 7.083C2 17.56 6.477 22 12 22a10 10 0 0 0 7-2.835"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 16c-.617 3.532-1.86 6-3.5 6-2.21 0-4-4.477-4-10 0-1.231.089-2.41.252-3.5M2 12h10M12 2c5.523 0 10 4.477 10 10M12 2a9.96 9.96 0 0 0-4.5 1.067M12 2c2.21 0 4 4.477 4 10h6M12 2c-1.119 0-2.273 1.149-3 3m13 7a9.96 9.96 0 0 1-1.068 4.5M2 2l20 20"
      />
    </svg>
  );
};
export default NoInternet;
