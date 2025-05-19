import React from "react";
const ShoppingBag_03: React.FC<
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
        d="m6.65 7.25.066-1.081a5.296 5.296 0 0 1 10.565 0v.01l.066 1.071h3.31l2.086 14.65a.75.75 0 0 1-.743.85H2a.75.75 0 0 1-.743-.85L3.343 7.25zm2.003 0 .058-.944a3.296 3.296 0 0 1 6.574 0l.058.944z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBag_03;
