import React from "react";
const ShoppingBasketFavorite_02: React.FC<
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
        d="M17.518 14.481c.185.077.347.165.484.25.137-.085.299-.173.484-.25.653-.27 1.576-.393 2.606.142 1.332.69 1.932 2.307 1.541 3.896-.399 1.625-1.794 3.204-4.374 4.138l-.257.093-.257-.093c-2.58-.934-3.975-2.513-4.374-4.138-.39-1.589.209-3.206 1.541-3.896 1.03-.535 1.953-.412 2.606-.142"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5 1.25a6.5 6.5 0 0 0-6.424 5.5H1.999a.75.75 0 0 0-.739.877L2.79 16.5h9.073c.27-1.329 1.055-2.532 2.36-3.21 1.448-.75 2.804-.611 3.78-.23a4.46 4.46 0 0 1 2.824-.147l.911-5.286A.75.75 0 0 0 21 6.75h-3.076a6.5 6.5 0 0 0-6.424-5.5m0 2a4.5 4.5 0 0 0-4.39 3.5h8.778a4.5 4.5 0 0 0-4.389-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.837 18.5q.033.19.079.377c.365 1.49 1.31 2.83 2.767 3.873H3.867l-.732-4.25z"
      />
    </svg>
  );
};
export default ShoppingBasketFavorite_02;
