import React from "react";
const ShoppingBagAdd: React.FC<
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
        d="M11.5 3.25C9.538 3.25 8 4.785 8 6.614V7.75H6V6.614C6 3.623 8.492 1.25 11.5 1.25S17 3.623 17 6.614V7.75h-2V6.614c0-1.83-1.538-3.364-3.5-3.364M19.75 19.75v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.571 12.032.012.041.336 1.177H16.25v3h-3v5h3v1.136l-.106.018c-1.421.238-3.063.351-4.691.346s-3.262-.129-4.667-.37c-1.374-.236-2.633-.602-3.428-1.153a5.1 5.1 0 0 1-1.854-2.344c-.325-.842-.307-1.751-.119-2.814.186-1.046.558-2.343 1.032-3.996L3.934 6.75h15.132zM13.5 12h-4v-2h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBagAdd;
