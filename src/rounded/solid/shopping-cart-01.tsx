import React from "react";
const ShoppingCart_01: React.FC<
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
        d="M1.5 2.248a1 1 0 0 1 1-1h.938a3 3 0 0 1 2.91 2.272l.005.019.465 2.213h13.2c.358.007.74.025 1.083.116.382.1.76.302 1.04.688.345.474.38 1.003.35 1.447-.028.412-.129.911-.238 1.454l-.012.058c-.402 2-.809 3.955-1.782 5.375a5 5 0 0 1-2.06 1.761c-.876.406-1.913.598-3.136.598H8.43c-.583.017-1.116.411-1.33.999H17.5l-.002.003v.001h.002a2.25 2.25 0 1 1-2.236 1.996h-2.528q.014.125.014.254a2.25 2.25 0 1 1-4.486-.254H6.411C5.594 20.248 5 19.57 5 18.82c0-1.352.74-2.56 1.854-3.164L4.404 3.99a1 1 0 0 0-.966-.742H2.5a1 1 0 0 1-1-1m9 17.504a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m7 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCart_01;
