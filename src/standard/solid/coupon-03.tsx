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
        fillRule="evenodd"
        d="M1.25 6A2.75 2.75 0 0 1 4 3.25h16A2.75 2.75 0 0 1 22.75 6v3.5a.75.75 0 0 1-.75.75 1.75 1.75 0 1 0 0 3.5.75.75 0 0 1 .75.75V18A2.75 2.75 0 0 1 20 20.75H4A2.75 2.75 0 0 1 1.25 18v-3.5a.75.75 0 0 1 .75-.75 1.75 1.75 0 1 0 0-3.5.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Coupon_03;
