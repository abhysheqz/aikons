import React from "react";
const Tan: React.FC<
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
        d="m8.5 17 1.2-4m4.8 4-1.2-4m-3.6 0 1.8-6 1.8 6m-3.6 0h3.6M22 7v10L17 7v10M2 7h2.5M7 7H4.5m0 10V7"
      />
    </svg>
  );
};
export default Tan;
