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
        d="m17.129 18.543-2.793 2.793 1.414 1.414 2.793-2.793 2.793 2.793 1.414-1.414-2.793-2.793 2.793-2.793-1.414-1.414-2.793 2.793-2.793-2.793-1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5 1.25a6.5 6.5 0 0 0-6.424 5.5H2a.75.75 0 0 0-.74.877L2.79 16.5h10.175l-.75-.75 3.535-3.536 2.793 2.793 2.324-2.324.872-5.056a.75.75 0 0 0-.74-.877h-3.075a6.5 6.5 0 0 0-6.424-5.5m0 2a4.5 4.5 0 0 0-4.389 3.5h8.777a4.5 4.5 0 0 0-4.388-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.965 18.5H3.135l.733 4.25h9.761l-1.414-1.414 2.793-2.793z"
      />
    </svg>
  );
};
export default ShoppingBasketRemove_02;
