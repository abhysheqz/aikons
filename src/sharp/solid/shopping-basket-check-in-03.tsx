import React from "react";
const ShoppingBasketCheckIn_03: React.FC<
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
        d="m19.043 14.335 3.707 3.708-1.414 1.414-1.293-1.293v4.586h-2v-4.586l-1.293 1.293-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.396 6.25H22a.75.75 0 0 1 .75.75v3.54l-1.605.536-.564 2.677-1.539-1.539-5.828 5.829 2.707 2.707H5.501a.75.75 0 0 1-.735-.596l-1.911-9.078-1.606-.535V7a.75.75 0 0 1 .75-.75h4.919l2.167-4.954 1.832.802L9.101 6.25h7.059l-2.053-4.106 1.789-.894zm-8.897 4h5v1.5h-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBasketCheckIn_03;
