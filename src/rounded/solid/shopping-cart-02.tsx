import React from "react";
const ShoppingCart_02: React.FC<
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
        d="M1 2a1 1 0 0 1 1-1h.966c1.383 0 2.618.916 2.966 2.266L6.378 5H22a1 1 0 1 1 0 2h-.105l-.538 4.84c-.15 1.35-.394 2.521-1.208 3.313s-1.992 1.004-3.346 1.117l-8.15.679q-.118.222-.273.424l-.334.432c.35.326.62.735.783 1.195h5.342a3.001 3.001 0 1 1 0 2H8.829a3.001 3.001 0 1 1-2.69-3.997l.658-.852a.96.96 0 0 0 .173-.825L3.995 3.764C3.884 3.333 3.472 3 2.966 3H2a1 1 0 0 1-1-1m5 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCart_02;
