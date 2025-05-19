import React from "react";
const ShoppingBasketFavorite_03: React.FC<
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
        d="M17.514 14.481c.185.077.347.165.484.25.137-.085.299-.173.484-.25.653-.27 1.576-.393 2.606.142 1.332.69 1.932 2.307 1.541 3.896-.399 1.625-1.794 3.204-4.375 4.138l-.256.093-.257-.093c-2.58-.934-3.975-2.513-4.374-4.138-.39-1.589.209-3.206 1.541-3.896 1.03-.535 1.953-.412 2.606-.142"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.396 6.25H22a.75.75 0 0 1 .75.75v3.54l-1.605.535-.383 1.821a4.46 4.46 0 0 0-2.762.163c-.977-.38-2.333-.52-3.78.232-2.069 1.072-2.83 3.466-2.309 5.586a6.1 6.1 0 0 0 .818 1.873H5.5a.75.75 0 0 1-.734-.596l-1.911-9.078-1.606-.535V7a.75.75 0 0 1 .75-.75h4.919l2.167-4.954 1.832.802L9.101 6.25h7.059l-2.053-4.106 1.789-.894zm-8.897 4h5v1.5h-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBasketFavorite_03;
