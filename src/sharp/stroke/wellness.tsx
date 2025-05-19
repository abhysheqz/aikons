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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 14h3l2.5 1.375h1c1.5 0 2.5 1.149 2.5 2.125l-3 1-3-1m6-.5 4.21-1.404a2 2 0 0 1 2.49 1.155l.3.749-9 4.5-7-1.98"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.002 12s2.1-2.239 2.1-5-2.1-5-2.1-5-2.1 2.239-2.1 5 2.1 5 2.1 5Zm0 0s3.067-.068 5-2.04c1.933-1.973 2-5.103 2-5.103s-1.27.028-2.69.574M12.002 12s-3.067-.068-5-2.04c-1.933-1.973-2-5.103-2-5.103s1.27.028 2.69.574"
      />
    </svg>
  );
};
export default Wellness;
