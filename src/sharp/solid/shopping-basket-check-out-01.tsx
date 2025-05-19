import React from "react";
const ShoppingBasketCheckOut_01: React.FC<
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
        d="M12 3.25a4.5 4.5 0 0 0-4.5 4.5h-2a6.5 6.5 0 0 1 13 0h-2a4.5 4.5 0 0 0-4.5-4.5M19.043 22.75l3.207-3.207-1.414-1.414-.793.793v-5.586h-2v5.586l-.793-.793-1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.5 6.75a.75.75 0 0 0-.74.877L4.369 22.75h12.554l-3.207-3.207 2.828-2.828v-4.88h4.97l.726-4.208a.75.75 0 0 0-.739-.877z"
      />
    </svg>
  );
};
export default ShoppingBasketCheckOut_01;
