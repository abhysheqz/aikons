import React from "react";
const ShoppingBasketCheckIn_01: React.FC<
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
        d="m19.043 13.336 3.207 3.207-1.414 1.414-.793-.793v5.586h-2v-5.586l-.793.793-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25a6.5 6.5 0 0 0-6.424 5.5H2.5a.75.75 0 0 0-.74.877L4.369 22.75h12.175v-3.379l-2.828-2.828 5.328-5.329 2.199 2.199.997-5.786a.75.75 0 0 0-.74-.877h-3.075A6.5 6.5 0 0 0 12 1.25m0 2a4.5 4.5 0 0 0-4.389 3.5h8.777A4.5 4.5 0 0 0 12 3.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBasketCheckIn_01;
