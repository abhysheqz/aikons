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
        d="M11.375 3.125c-1.962 0-3.5 1.535-3.5 3.364v1.636a1 1 0 0 1-2 0V6.489c0-2.991 2.492-5.364 5.5-5.364s5.5 2.373 5.5 5.364v1.636a1 1 0 1 1-2 0V6.489c0-1.83-1.538-3.364-3.5-3.364"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.767 7.728c1.196-.858 2.746-1.103 4.726-1.103h3.764c2.069 0 3.633.284 4.814 1.168 1.016.76 1.647 1.885 2.14 3.352.114.34.17.51.081.636-.09.124-.274.124-.642.124h-.028c-.097 0-.146 0-.188-.012a1 1 0 0 1-.187-.108 2.5 2.5 0 0 0-3.872 2.09v.9c0 .283 0 .424-.088.512s-.23.088-.512.088h-.9a2.5 2.5 0 0 0 0 5h.9c.283 0 .424 0 .512.088s.088.23.088.512v.9c0 .2 0 .3-.025.358a.27.27 0 0 1-.125.14c-.053.031-.134.04-.295.06a31 31 0 0 1-3.602.192c-1.628-.005-3.262-.129-4.667-.37-1.374-.236-2.633-.602-3.428-1.153a5.1 5.1 0 0 1-1.854-2.344c-.325-.842-.307-1.751-.119-2.814.186-1.046.558-2.343 1.032-3.996l.012-.043c.553-1.925 1.258-3.311 2.463-4.177m5.608 2.147a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.875 12.875a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBagAdd;
