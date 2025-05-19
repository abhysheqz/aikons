import React from "react";
const Wrench_02: React.FC<
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
        d="M15 11.5v7.665C15 20.731 13.657 22 12 22s-3-1.27-3-2.835V11.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12.006 18.999-.006.006"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.768 12.732 3.464-3.464a2.5 2.5 0 0 0 0-3.536L13.5 2v4.5a1.5 1.5 0 0 1-3 0V2L6.768 5.732a2.5 2.5 0 0 0 0 3.536l3.464 3.464a2.5 2.5 0 0 0 3.536 0Z"
      />
    </svg>
  );
};
export default Wrench_02;
