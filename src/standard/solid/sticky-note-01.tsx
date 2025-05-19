import React from "react";
const StickyNote_01: React.FC<
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
        d="M11.147 3.134a.736.736 0 0 0-1.017-.282.79.79 0 0 0-.277 1.067.736.736 0 0 0 1.017.282.79.79 0 0 0 .277-1.067M9.37 1.558a2.236 2.236 0 0 1 3.081.835 2.29 2.29 0 0 1-.821 3.101 2.2 2.2 0 0 1-.952.302L10.31 7.19a.75.75 0 1 1-1.45-.382l.37-1.404a2.29 2.29 0 0 1 .14-3.847"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.557 5.867a3.8 3.8 0 0 1-.66-1.29L3.554 5.694a2.75 2.75 0 0 0-1.786 3.324l2.71 10.064q.087.322.244.607l2.054-2.312a2.75 2.75 0 0 1 4.293.228l3.365 4.71 5.974-1.991a2.75 2.75 0 0 0 1.769-3.385l-3.87-13.16a2.75 2.75 0 0 0-3.509-1.833l-.784.261c.624 1.68-.01 3.635-1.624 4.582q-.237.14-.485.24l-.143.546a2.25 2.25 0 0 1-4.352-1.146zm5.281 16.795-2.99-4.186a1.25 1.25 0 0 0-1.952-.103l-2.12 2.386q.303.171.647.264l5.806 1.548q.3.08.61.091"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StickyNote_01;
