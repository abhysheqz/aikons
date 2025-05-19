import React from "react";
const Profit: React.FC<
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
        d="M12 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 6.5h1M12.75 9H11m1.75 0a1.25 1.25 0 1 0 0-2.5H12m.75 2.5a1.25 1.25 0 1 1 0 2.5H12M11 9V6.5M11 9v2.5m-1 0h1m0-5h1m-1 5h1m0-5v-1m0 6v1M15 18c-2 0-3 1.5-3 1.5s1 1.5 3 1.5 3-1.5 3-1.5-1-1.5-3-1.5M9 18c-2 0-3 1.5-3 1.5S7 21 9 21s3-1.5 3-1.5S11 18 9 18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 22v-6"
      />
    </svg>
  );
};
export default Profit;
