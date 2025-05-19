import React from "react";
const ShoppingCartCheckOut_01: React.FC<
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
        d="M13.625 10.999a1 1 0 0 1-1-1V5.706h-1.793c-.265 0-.543-.097-.64-.344a1 1 0 0 1 .226-1.07l2.5-2.5a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 .225 1.07c-.096.247-.374.344-.64.344h-1.792V10a1 1 0 0 1-1 1m-11.5-8a1 1 0 0 1 1-1h2.5a1 1 0 0 1 .987.84l.389 2.41h1.838q.032.3.142.584c.393 1.01 1.402 1.173 1.851 1.173h.493V10a2.3 2.3 0 1 0 4.6 0V7.006h.493c.45 0 1.458-.163 1.85-1.173q.111-.285.143-.584h2.714a.75.75 0 0 1 .737.888l-1.5 8a.75.75 0 0 1-.608.6l-10.917 1.9.004.021a1 1 0 0 0 .987.841h8.297q.055 0 .109.006l.141-.004a2.5 2.5 0 1 1-2.45 1.998h-4.1q.05.244.05.502a2.5 2.5 0 1 1-4.393-1.633 3 3 0 0 1-.615-1.391L4.773 3.999H3.125a1 1 0 0 1-1-1m7.25 16.002a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCartCheckOut_01;
