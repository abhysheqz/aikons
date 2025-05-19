import React from "react";
const ShoppingCartRemove_02: React.FC<
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
        d="M1 2a1 1 0 0 1 1-1h2.5a1 1 0 0 1 .984.824l2.5 14a1 1 0 0 1-.09.623l-1 2a1 1 0 1 1-1.788-.894l.851-1.704L3.663 3H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0M16 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 20a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M9.293 3.293a1 1 0 0 1 1.414 0L12.5 5.086l1.793-1.793a1 1 0 1 1 1.414 1.414L13.914 6.5l1.793 1.793a1 1 0 0 1-1.414 1.414L12.5 7.914l-1.793 1.793a1 1 0 0 1-1.414-1.414L11.086 6.5 9.293 4.707a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.7 4H5v.25a.75.75 0 0 0-.738.884l2 11a.75.75 0 0 0 .845.608l11.5-1.65a.75.75 0 0 0 .634-.623L20.599 6H21a1 1 0 1 0 0-2h-3.7c0 .589-.225 1.177-.674 1.626l-.873.874.873.874a2.3 2.3 0 1 1-3.252 3.252l-.874-.873-.874.873a2.3 2.3 0 1 1-3.252-3.252l.873-.874-.873-.874A2.3 2.3 0 0 1 7.7 4"
      />
    </svg>
  );
};
export default ShoppingCartRemove_02;
