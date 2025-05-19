import React from "react";
const Wellness: React.FC<
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
        d="M4 14h2.69a1 1 0 0 1 .566.176l1.488 1.023a1 1 0 0 0 .567.176H10.5c1.5 0 2.5 1.149 2.5 2.125l-3 1-3-1m6-.5 4.21-1.404a2 2 0 0 1 2.49 1.155v0a.877.877 0 0 1-.422 1.11L10.999 22 4 20.02M12.002 12s2.1-2.239 2.1-5-2.1-5-2.1-5-2.1 2.239-2.1 5 2.1 5 2.1 5m0 0s3.067-.028 5-2 2-5 2-5-1.08-.045-2.5.5m-4.5 6.5s-3.067-.028-5-2-2-5-2-5 1.08-.045 2.5.5"
      />
    </svg>
  );
};
export default Wellness;
