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
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 1.25a.75.75 0 0 0-.75.75l.001 19.512a.75.75 0 0 0 1.088.67l3.644-1.834 4.153 2.308a.75.75 0 0 0 .728 0l4.153-2.308 3.646 1.834a.75.75 0 0 0 1.087-.67V2a.75.75 0 0 0-.75-.75zM14.586 7 8 13.586 9.414 15 16 8.414zm-4.577 0H8v2h2.009zM16 13h-2.009v2H16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Coupon_01;
