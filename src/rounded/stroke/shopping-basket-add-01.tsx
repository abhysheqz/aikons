import React from "react";
const ShoppingBasketAdd_01: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m21.052 11.5.279-1.66c.182-1.086.273-1.628-.019-1.984-.291-.356-.827-.356-1.898-.356H4.586c-1.071 0-1.607 0-1.898.356-.292.356-.2.898-.019 1.984l1.204 7.18c.399 2.38.598 3.569 1.413 4.275C6.1 22 7.274 22 9.622 22H12M14 18h8m-4 4v-8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.5 7.5a5.5 5.5 0 1 0-11 0"
      />
    </svg>
  );
};
export default ShoppingBasketAdd_01;
