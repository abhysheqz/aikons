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
        d="M12 3.25c-1.962 0-3.5 1.535-3.5 3.364V7.75h-2V6.614C6.5 3.623 8.992 1.25 12 1.25s5.5 2.373 5.5 5.364V7.75h-2V6.614c0-1.83-1.538-3.364-3.5-3.364"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m21.083 12.073-.012-.041-1.505-5.282H4.434l-1.517 5.323c-.474 1.653-.846 2.95-1.032 3.996-.188 1.063-.206 1.972.119 2.814a5.1 5.1 0 0 0 1.854 2.344c.795.551 2.054.917 3.428 1.153 1.405.241 3.04.365 4.667.37 1.628.005 3.27-.108 4.691-.346 1.393-.234 2.674-.605 3.498-1.177a5.1 5.1 0 0 0 1.854-2.344c.325-.842.307-1.751.119-2.814-.186-1.046-.558-2.343-1.032-3.996M10 12h4v-2h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBag_01;
