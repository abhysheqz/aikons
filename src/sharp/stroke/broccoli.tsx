import React from "react";
const Broccoli: React.FC<
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
        d="M4.052 8.462C1.877 10.47 3.258 14 6.516 14c1.63 0 3.008-.981 3.45-2.327 1.512.923 3.023.48 4.03-1.014 0 1.845 1.578 3.341 3.525 3.341 3.814 0 4.83-5.192 1.34-6.462m-12.924 2.77C2.323 8.89 4.247 4.36 7.952 4.798 7.952 3.27 9.305 2 10.974 2s3.022 1.022 3.022 2.551a3.17 3.17 0 0 1 2.015-.705c1.669 0 3.021 1.24 3.021 2.77 0 1.529-1.352 2.769-3.021 2.769"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 14c.886.441 2.413 3.537 2.5 8h5c.087-4.463 1.614-7.558 2.5-8"
      />
    </svg>
  );
};
export default Broccoli;
