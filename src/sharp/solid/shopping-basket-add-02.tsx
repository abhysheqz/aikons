import React from "react";
const ShoppingBasketAdd_02: React.FC<
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
        d="M19.75 19.75v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.25 18.5H3.136l.732 4.25H16.25v-1.5h-3z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5 1.25a6.5 6.5 0 0 0-6.424 5.5H2a.75.75 0 0 0-.74.877L2.79 16.5h10.46v-.25h3v-3h4.52l.97-5.623A.75.75 0 0 0 21 6.75h-3.076a6.5 6.5 0 0 0-6.424-5.5m0 2a4.5 4.5 0 0 0-4.388 3.5h8.777a4.5 4.5 0 0 0-4.389-3.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBasketAdd_02;
