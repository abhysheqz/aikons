import React from "react";
const ShoppingBasketSecure_01: React.FC<
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
        d="M17.499 7.504A5.503 5.503 0 0 0 11.999 2a5.503 5.503 0 0 0-5.5 5.505"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.986 22.001h-7.94L2.499 7.516a.01.01 0 0 1 .01-.011H21.49a.01.01 0 0 1 .01.011l-.796 4.482"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21.5 17.5V15c-2 0-3.5-1-3.5-1s-1.5 1-3.5 1v2.5C14.5 21 18 22 18 22s3.5-1 3.5-4.5Z"
      />
    </svg>
  );
};
export default ShoppingBasketSecure_01;
