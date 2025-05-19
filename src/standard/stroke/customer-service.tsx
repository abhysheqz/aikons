import React from "react";
const CustomerService: React.FC<
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
        d="m4 12 4-4-3-6-2.414 2.414a1.88 1.88 0 0 0-.566 1.414c.419 8.73 7.422 15.733 16.152 16.152.53.026 1.039-.19 1.414-.566L22 19l-6-3-4 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 7h2.5v2.5h-2V12h2M18 7v2.5m0 0h-2.143V7M18 9.5V12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 4.305q.133-.15.277-.294A6.867 6.867 0 1 1 19.695 14"
      />
    </svg>
  );
};
export default CustomerService;
