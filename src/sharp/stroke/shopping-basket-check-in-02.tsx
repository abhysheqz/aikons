import React from "react";
const ShoppingBasketCheckIn_02: React.FC<
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
        d="M17.499 7.5a5.5 5.5 0 1 0-11 0M4.499 17.5h8M17.999 14v8m0-8 3 3m-3-3-3 3M12.53 22H5.047L2.499 7.53a.01.01 0 0 1 .01-.012H21.49a.01.01 0 0 1 .01.012l-.916 5.465"
      />
    </svg>
  );
};
export default ShoppingBasketCheckIn_02;
