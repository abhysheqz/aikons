import React from "react";
const ShoppingCartCheckOut_02: React.FC<
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
        d="M7 20a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M12.5 12a1 1 0 0 0 1-1V6.5H15a1 1 0 0 0 .707-1.707l-2.5-2.5a1 1 0 0 0-1.414 0l-2.5 2.5A1 1 0 0 0 10 6.5h1.5V11a1 1 0 0 0 1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.8 11a2.3 2.3 0 1 1-4.6 0V7.8H10A2.3 2.3 0 0 1 8.256 4H5v.25a.75.75 0 0 0-.738.884l2 11a.75.75 0 0 0 .845.608l11.5-1.65a.75.75 0 0 0 .634-.623L20.599 6H21a1 1 0 1 0 0-2h-4.256A2.3 2.3 0 0 1 15 7.8h-.2z"
      />
    </svg>
  );
};
export default ShoppingCartCheckOut_02;
