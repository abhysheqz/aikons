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
        d="M2 1a1 1 0 0 0 0 2h1.663l2.294 12.85-.61 1.221A3.001 3.001 0 1 0 8.828 21h4.342a3.001 3.001 0 1 0 0-2H8.829a3 3 0 0 0-1.394-1.635l.361-.722 10.81-1.55a.75.75 0 0 0 .634-.624L20.6 6h.4a1 1 0 1 0 0-2H5.873l-.389-2.176A1 1 0 0 0 4.5 1zm13 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCart_02;
