import React from "react";
const ShoppingBasketFavorite_01: React.FC<
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
        d="M11.499 3.25a4.5 4.5 0 0 0-4.5 4.5h-2a6.5 6.5 0 1 1 13 0h-2a4.5 4.5 0 0 0-4.5-4.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.518 14.435c.185.077.347.165.484.252.137-.087.299-.175.484-.252.653-.273 1.576-.395 2.606.142 1.332.694 1.932 2.32 1.541 3.919-.4 1.634-1.794 3.221-4.375 4.16l-.256.094-.257-.093c-2.58-.94-3.975-2.527-4.375-4.161-.39-1.599.21-3.225 1.542-3.92 1.03-.536 1.953-.414 2.606-.141"
      />
      <path
        fill="currentColor"
        d="M1.999 6.75a.75.75 0 0 0-.74.877L3.868 22.75h10.825c-1.463-1.05-2.411-2.4-2.777-3.899-.519-2.123.237-4.526 2.305-5.605 1.448-.755 2.805-.616 3.783-.234a4.45 4.45 0 0 1 2.832-.145l.903-5.24A.75.75 0 0 0 21 6.75z"
      />
    </svg>
  );
};
export default ShoppingBasketFavorite_01;
