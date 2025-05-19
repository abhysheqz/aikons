import React from "react";
const ShoppingCartFavorite_02: React.FC<
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
        d="M1 2a1 1 0 0 1 1-1h2.5a1 1 0 0 1 .984.824l2.5 14a1 1 0 0 1-.09.623l-1 2a1 1 0 1 1-1.788-.894l.851-1.704L3.663 3H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0M16 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 20a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.243 3.29c-1.597-.833-2.743.394-2.743.394s-1.146-1.227-2.743-.394C7.823 4.298 7.684 8.247 12.5 10c4.816-1.753 4.677-5.702 2.743-6.71"
      />
      <path
        fill="currentColor"
        d="M7.334 6.674c.454 1.856 2.014 3.562 4.721 4.548a1.3 1.3 0 0 0 .89 0c2.707-.986 4.267-2.692 4.72-4.548A4.42 4.42 0 0 0 17.502 4H21a1 1 0 1 1 0 2h-.4l-1.36 8.469a.75.75 0 0 1-.633.623l-11.5 1.65a.75.75 0 0 1-.845-.608l-2-11A.75.75 0 0 1 5 4.25V4h2.499a4.42 4.42 0 0 0-.165 2.674"
      />
    </svg>
  );
};
export default ShoppingCartFavorite_02;
