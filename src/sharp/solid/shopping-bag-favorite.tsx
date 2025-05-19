import React from "react";
const ShoppingBagFavorite: React.FC<
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
        d="M11.5 3.25C9.538 3.25 8 4.785 8 6.614V7.75H6V6.614C6 3.623 8.492 1.25 11.5 1.25S17 3.623 17 6.614V7.75h-2V6.614c0-1.83-1.538-3.364-3.5-3.364"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.067 15.454c.165.068.31.145.433.221.122-.076.268-.153.433-.221.584-.239 1.41-.347 2.332.125 1.193.61 1.73 2.036 1.38 3.438-.357 1.434-1.606 2.827-3.915 3.651l-.23.082-.23-.082c-2.31-.824-3.557-2.217-3.915-3.65-.35-1.403.187-2.83 1.38-3.44.922-.47 1.748-.363 2.332-.124"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.571 12.032.012.041q.289 1 .519 1.835a4.2 4.2 0 0 0-2.6.105c-.901-.333-2.134-.442-3.448.23-1.928.985-2.638 3.19-2.153 5.137.302 1.208 1.02 2.299 2.103 3.183-1.127.13-2.343.19-3.551.187-1.628-.005-3.262-.129-4.667-.37-1.374-.236-2.633-.602-3.428-1.153a5.1 5.1 0 0 1-1.854-2.344c-.325-.842-.307-1.751-.119-2.814.186-1.046.558-2.343 1.032-3.996L3.934 6.75h15.132zM13.5 12h-4v-2h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBagFavorite;
