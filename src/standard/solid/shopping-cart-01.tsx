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
        d="M3.5 2a1 1 0 0 0 0 2h1.648l2.094 12.978c.084.524.302 1 .615 1.391A2.5 2.5 0 1 0 12.2 19.5h4.1a2.5 2.5 0 1 0 2.31-1.994 1 1 0 0 0-.11-.005h-8.297a1 1 0 0 1-.987-.84l-.003-.023 10.916-1.898a.75.75 0 0 0 .608-.6l1.5-8a.75.75 0 0 0-.737-.889H7.376l-.389-2.41A1 1 0 0 0 6 2zm5.25 18.002a1 1 0 1 1 2 0 1 1 0 0 1-2 0m10-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCart_01;
