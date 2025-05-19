import React from "react";
const ShoppingBag_01: React.FC<
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
        d="M12 3c-1.962 0-3.5 1.535-3.5 3.364V7.5h-2V6.364C6.5 3.373 8.992 1 12 1s5.5 2.373 5.5 5.364V7.5h-2V6.364C15.5 4.534 13.962 3 12 3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.265 6.75a3.75 3.75 0 0 0-3.607 2.722l-.741 2.601c-.474 1.653-.846 2.95-1.032 3.996-.188 1.063-.206 1.972.119 2.814a5.1 5.1 0 0 0 1.854 2.344c.795.551 2.054.917 3.428 1.153 1.405.241 3.04.365 4.667.37 1.628.005 3.27-.108 4.691-.346 1.393-.234 2.674-.605 3.498-1.177a5.1 5.1 0 0 0 1.854-2.344c.325-.842.307-1.751.119-2.814-.186-1.046-.558-2.343-1.032-3.996l-.012-.041-.73-2.56a3.75 3.75 0 0 0-3.606-2.722zM10.5 10a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBag_01;
