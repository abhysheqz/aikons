import React from "react";
const ShoppingBasketAdd_03: React.FC<
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
        d="M20.249 19.75v2.5h-2v-2.5h-2.5v-2h2.5v-2.5h2v2.5h2.5v2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.396 6.75H22a.75.75 0 0 1 .75.75v3.54l-1.605.536-.458 2.174H16.75v2.5h-2.5v5H5.5a.75.75 0 0 1-.734-.596l-1.911-9.078-1.606-.535V7.5a.75.75 0 0 1 .75-.75h4.919l2.167-4.954 1.832.802L9.101 6.75h7.059l-2.053-4.106 1.789-.894zm-8.897 4h5v1.5h-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBasketAdd_03;
