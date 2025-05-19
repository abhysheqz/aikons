import React from "react";
const ElearningExchange: React.FC<
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
        d="M10.549 2.057c11.277-1.017 14.587 11.844 8.308 17.192M18 17.5V20h3m-7.561 1.955C2.216 22.848-1.148 10.111 5.131 4.764M6 6.5V4H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 14H9.5A1.5 1.5 0 0 0 8 15.5m8-1.5V7h-6a2 2 0 0 0-2 2v6.5m8-1.5v3H9.5A1.5 1.5 0 0 1 8 15.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11 10h2"
      />
    </svg>
  );
};
export default ElearningExchange;
