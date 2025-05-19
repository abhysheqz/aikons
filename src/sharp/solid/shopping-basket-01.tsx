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
        fill="currentColor"
        fillRule="evenodd"
        d="M12.001 3.25a4.5 4.5 0 0 0-4.5 4.5h-2a6.5 6.5 0 0 1 13 0h-2a4.5 4.5 0 0 0-4.5-4.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.927 7.017a.75.75 0 0 1 .574-.267h19a.75.75 0 0 1 .74.877L19.632 22.75H4.369L1.762 7.627a.75.75 0 0 1 .165-.61"
      />
    </svg>
  );
};
export default ShoppingBasket_01;
