import React from "react";
const CustomerService_01: React.FC<
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
        d="M7 11v6l-2 1c-1.673-1.452-2.509-2.178-2.815-2.979A2.7 2.7 0 0 1 2 14a2.7 2.7 0 0 1 .185-1.021C2.491 12.179 3.327 11.452 5 10zM17 17v-6l2-1c1.672 1.452 2.509 2.178 2.815 2.979.128.335.19.678.185 1.021a2.7 2.7 0 0 1-.185 1.021c-.306.8-1.143 1.527-2.815 2.979z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 11V9c0-3.866-3.582-7-8-7S4 5.134 4 9v2M20 17c0 5-4 5-8 5"
      />
    </svg>
  );
};
export default CustomerService_01;
