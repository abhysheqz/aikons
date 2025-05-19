import React from "react";
const Analytics_02: React.FC<
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
        d="M6 18v-3m5 3V9m5 9v-4M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12.947 4H2v18h18V11.053"
      />
    </svg>
  );
};
export default Analytics_02;
