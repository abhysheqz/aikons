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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 22c-3.205-.006-6.404-.48-7.715-1.39a4.35 4.35 0 0 1-1.581-1.998c-.507-1.31-.023-2.998.946-6.375l.73-2.56A3 3 0 0 1 7.264 7.5h9.194a3 3 0 0 1 2.959 2.507l.082.493"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.5 7.5V6.364C7.5 3.954 9.515 2 12 2s4.5 1.954 4.5 4.364V7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 11h3M20.243 15.29c-1.596-.833-2.743.394-2.743.394s-1.146-1.227-2.743-.394c-1.934 1.008-2.073 4.957 2.743 6.71 4.816-1.753 4.677-5.702 2.743-6.71"
      />
    </svg>
  );
};
export default ShoppingBagFavorite;
