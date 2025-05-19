import React from "react";
const Wrench_01: React.FC<
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
        d="m13.5 14.5-6.172 6.172a2.829 2.829 0 0 1-4-4L9.5 10.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.509 18.5H5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 11.5v-6a3 3 0 0 1 3-3H19l-3.75 3.75a1.768 1.768 0 1 0 2.5 2.5L21.5 5v6.5a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3"
      />
    </svg>
  );
};
export default Wrench_01;
