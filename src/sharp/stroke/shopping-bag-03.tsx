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
        stroke="currentColor"
        strokeWidth={1.5}
        d="m7.5 9.5.215-3.51a4.296 4.296 0 0 1 8.57 0L16.5 9.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.032 7H4.007L2 21.878c-.009.064.038.122.1.122H21.9c.06 0 .108-.058.099-.122z"
      />
    </svg>
  );
};
export default ShoppingBag_03;
