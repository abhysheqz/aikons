import React from "react";
const FrenchFries_01: React.FC<
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
        d="M10.602 1.364a.75.75 0 0 1 .634-.076l3 1a.75.75 0 0 1 .499.86l-.902 4.507.995-1.99a.75.75 0 0 1 .671-.415h3a.75.75 0 0 1 .648 1.128l-3.5 6-1.296-.756 2.842-4.872h-1.23l-2.293 4.585-1.341-.67.09-.181-.655-.131 1.37-6.85-1.511-.505-.88 6.601-1.487-.198.522-3.913-1.14-.439-.393 3.534-1.491-.166.5-4.5A.75.75 0 0 1 8.269 3.3l1.712.659.275-2.058a.75.75 0 0 1 .346-.537"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.763 7.298a.75.75 0 0 0-.996.86l.98 4.578c.41-.252.796-.41 1.094-.47q.32-.065.659-.066a3.3 3.3 0 1 1 0 6.6 4 4 0 0 1-.458-.023l.725 3.38a.75.75 0 0 0 1.277.359l9-9.5a.75.75 0 0 0-.28-1.218z"
      />
      <path
        fill="currentColor"
        d="M6.664 17.011c.18.075.299.117.395.143.127.035.227.046.44.046a1.7 1.7 0 1 0-.34-3.366c-.132.027-.562.199-1.046.608z"
      />
    </svg>
  );
};
export default FrenchFries_01;
