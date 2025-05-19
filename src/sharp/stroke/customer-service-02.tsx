import React from "react";
const CustomerService_02: React.FC<
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
        strokeWidth={1.5}
        d="M7 13v6l-2 1c-1.673-1.452-2.509-2.178-2.815-2.979A2.7 2.7 0 0 1 2 16a2.7 2.7 0 0 1 .185-1.021C2.491 14.179 3.327 13.452 5 12zM17 19v-6l2-1c1.672 1.452 2.509 2.178 2.815 2.979.128.335.19.678.185 1.021a2.7 2.7 0 0 1-.185 1.021c-.306.8-1.143 1.527-2.815 2.979z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 21c1.657 1.333 4.343 1.333 6 0M2 16v-4C2 6.477 6.477 2 12 2s10 4.477 10 10v4"
      />
    </svg>
  );
};
export default CustomerService_02;
