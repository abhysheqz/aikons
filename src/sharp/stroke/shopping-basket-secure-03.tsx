import React from "react";
const ShoppingBasketSecure_03: React.FC<
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
        d="M6.5 10 10 2m5 0 2.5 5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m11.016 19.979-5.516.008a.01.01 0 0 1-.01-.008L3.486 10.51l-1.484-.501V7.06a.01.01 0 0 1 .01-.01h5.37m3.596-.036h11.01a.01.01 0 0 1 .01.01v2.99l-1.508.508-.38 1.977M16.893 14.02c-1.379.08-2.488 1.247-3.707 1.206-.325 1.152-.503 3.9 1.498 5.658.51.45 1.565 1.04 2.296 1.116.736-.068 1.99-.742 2.356-1.126.655-.69 2.228-2.08 1.484-5.65-1.347.038-2.44-1.289-3.927-1.203Z"
      />
    </svg>
  );
};
export default ShoppingBasketSecure_03;
