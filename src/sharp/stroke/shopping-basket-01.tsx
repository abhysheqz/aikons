import React from "react";
const ShoppingBasket_01: React.FC<
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
        d="M17.01 7.453C17.01 4.44 14.547 2 11.51 2s-5.5 2.441-5.5 5.453M21.4 7.596H2.6a.1.1 0 0 0-.099.115l2.486 14.29h13.995l2.517-14.29a.1.1 0 0 0-.1-.115Z"
      />
    </svg>
  );
};
export default ShoppingBasket_01;
