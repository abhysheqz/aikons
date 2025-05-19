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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.756 15.458h7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M1.998 22 7.183 2m0 0h10.84a.01.01 0 0 1 .009.009l3.97 19.281q.001.012-.009.013h-9.862z"
      />
    </svg>
  );
};
export default ShopSign;
