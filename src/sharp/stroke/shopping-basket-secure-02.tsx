import React from "react";
const ShoppingBasketSecure_02: React.FC<
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
        d="M17.5 7.502a5.5 5.5 0 1 0-11 0M4.5 17.502h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.017 21.998H5.546L2.999 7.513a.01.01 0 0 1 .01-.011H20.99a.01.01 0 0 1 .01.011l-.796 4.482"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 17.498v-2.5c-2 0-3.5-1-3.5-1s-1.5 1-3.5 1v2.5c0 3.5 3.5 4.5 3.5 4.5s3.5-1 3.5-4.5Z"
      />
    </svg>
  );
};
export default ShoppingBasketSecure_02;
