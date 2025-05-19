import React from "react";
const ShoppingBagRemove: React.FC<
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
        d="M11.5 3.25C9.538 3.25 8 4.785 8 6.614V7.75H6V6.614C6 3.623 8.492 1.25 11.5 1.25S17 3.623 17 6.614V7.75h-2V6.614c0-1.83-1.538-3.364-3.5-3.364M17.129 18.543l-2.793 2.793 1.414 1.414 2.793-2.793 2.793 2.793 1.414-1.414-2.793-2.793 2.793-2.793-1.414-1.414-2.793 2.793-2.793-2.793-1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.571 12.032.012.041.2.695-2.24 2.24-2.793-2.794-3.535 3.536 2.793 2.793-2.793 2.793 1.353 1.353c-.695.043-1.406.063-2.115.06-1.628-.004-3.262-.128-4.667-.369-1.374-.236-2.633-.602-3.428-1.153a5.1 5.1 0 0 1-1.854-2.344c-.325-.842-.307-1.751-.119-2.814.186-1.046.558-2.343 1.032-3.996L3.934 6.75h15.132zM13.5 12h-4v-2h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBagRemove;
