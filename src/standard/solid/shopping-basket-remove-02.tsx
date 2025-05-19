import React from "react";
const ShoppingBasketRemove_02: React.FC<
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
        d="M11.5 3A3.5 3.5 0 0 0 8 6.5V8H6V6.5a5.5 5.5 0 1 1 11 0V8h-2V6.5A3.5 3.5 0 0 0 11.5 3M21.697 14.283a1 1 0 0 1 .02 1.414l-2.329 2.4 2.143 2.206a1 1 0 1 1-1.435 1.393l-2.102-2.164-2.09 2.153a1 1 0 0 1-1.435-1.393l2.132-2.196-2.318-2.388a1 1 0 1 1 1.435-1.393l2.276 2.345 2.288-2.357a1 1 0 0 1 1.415-.02"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.446 17H3.276L2.01 8.141A1 1 0 0 1 3 7h17a1 1 0 0 1 .99 1.141l-.635 4.443a2.5 2.5 0 0 0-1.149.675l-1.212 1.248-1.2-1.237a2.5 2.5 0 0 0-3.588 3.483zM13.701 23H6.735a3 3 0 0 1-2.97-2.576L3.56 19h10.072l-.24.247A2.5 2.5 0 0 0 13.7 23"
      />
    </svg>
  );
};
export default ShoppingBasketRemove_02;
