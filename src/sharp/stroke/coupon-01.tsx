import React from "react";
const Coupon_01: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.969 8-6 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.969 14h-.01M8.979 8h-.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.403 2H3.598a.1.1 0 0 0-.1.1v19.31a.1.1 0 0 0 .145.089l3.865-1.972 4.397 2.448a.2.2 0 0 0 .195 0l4.38-2.448 3.877 1.971a.1.1 0 0 0 .145-.089V2.099a.1.1 0 0 0-.1-.099Z"
      />
    </svg>
  );
};
export default Coupon_01;
