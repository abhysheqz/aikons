import React from "react";
const ShopSign: React.FC<
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
        d="M7.07 2.5h8.686c1.182 0 1.773 0 2.192.335s.541.906.785 2.047l3.032 14.206c.238 1.115.357 1.672.053 2.042s-.882.37-2.037.37h-6.544c-.77 0-1.155 0-1.431-.216-.276-.215-.365-.584-.542-1.323zm0 0L2 21.5M4 16h6"
      />
    </svg>
  );
};
export default ShopSign;
