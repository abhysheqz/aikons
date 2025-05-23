import React from "react";
const HandPointingDown_03: React.FC<
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
        d="M18.5 2v1.5l1.123 1.404a4 4 0 0 1 .877 2.5V11.5a2 2 0 0 1-2 2h-1M8.5 2v1.5l-4.61 6.664a1.74 1.74 0 0 0-.01 2.183 1.736 1.736 0 0 0 2.488.234l2.132-2.08v10a1.5 1.5 0 0 0 3 0v-5m0 0v-2m0 2h1a2 2 0 0 0 2-2v-1m3-1v1a2 2 0 0 1-2 2h-1"
      />
    </svg>
  );
};
export default HandPointingDown_03;
