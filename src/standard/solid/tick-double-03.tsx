import React from "react";
const TickDouble_03: React.FC<
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
        d="M16.328 6.907a1 1 0 0 1-1.143.193l-2.117 2.28a1 1 0 1 1-1.465-1.36l2.304-2.483a1.68 1.68 0 0 1 2.421-.045 1 1 0 0 1 0 1.415M6.542 9.6a2 2 0 0 0-2.838.238l-1.24 1.489a2 2 0 0 0 .185 2.754l4.775 4.378a1.74 1.74 0 0 0 2.404-.052 1 1 0 0 0-1.213-1.57L4 12.607l1.24-1.488.085.072a1 1 0 0 0 1.302-1.518zm14.343-3.697a1.75 1.75 0 0 0-2.52.047l-5.303 5.711-2.183-1.871a1.75 1.75 0 0 0-2.483.208l-1.24 1.489a1.75 1.75 0 0 0 .162 2.41l4.59 4.208a1.75 1.75 0 0 0 2.42-.052l8.116-8.116a1.75 1.75 0 0 0 0-2.475z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TickDouble_03;
