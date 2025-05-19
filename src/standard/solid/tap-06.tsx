import React from "react";
const Tap_06: React.FC<
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
        d="M7.996 5.815c0-.841.597-1.561 1.436-1.561.843 0 1.449.71 1.449 1.561V13.5a.375.375 0 0 0 .75 0v-3.125h.627c.288 0 .674.088 1.011.246.354.165.56.36.617.512q.067.173.068.367V13a.375.375 0 0 0 .75 0v-1.5q0-.063-.005-.125h.706c.557 0 1.01.33 1.173.758q.067.173.067.367v1a.375.375 0 0 0 .75 0v-1a1.8 1.8 0 0 0-.154-.724c1.379.18 2.509 1.289 2.509 2.724V17a3.6 3.6 0 0 1-.797 2.252l-.703.988v1.26a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75v-1.25l-2.315-3.087a3.425 3.425 0 0 1 .318-4.477l1.993-1.993V14.5a.375.375 0 0 0 .75 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.5 3.5a3 3 0 0 0-3 3 1 1 0 0 1-2 0 5 5 0 0 1 10 0 1 1 0 1 1-2 0 3 3 0 0 0-3-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tap_06;
