import React from "react";
const Coupon_03: React.FC<
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
        fill="currentColor"
        d="M1.25 3.5A.75.75 0 0 1 2 2.75h20a.75.75 0 0 1 .75.75v6.75h-1.224a1.75 1.75 0 1 0 0 3.5h1.224v6.75a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-6.75h1.223a1.75 1.75 0 1 0 0-3.5H1.25z"
      />
    </svg>
  );
};
export default Coupon_03;
