import React from "react";
const ShoppingBasket_02: React.FC<
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
        d="M17.5 6.641c0-2.966-2.462-5.37-5.5-5.37S6.5 3.675 6.5 6.64M4.5 16.877h15M21.4 7.11H2.6c-.062 0-.109.052-.099.11l2.486 14.054h13.995L21.499 7.22c.01-.058-.037-.11-.1-.11Z"
      />
    </svg>
  );
};
export default ShoppingBasket_02;
