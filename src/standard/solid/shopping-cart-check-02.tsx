import React from "react";
const ShoppingCartCheck_02: React.FC<
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
        d="M7 20a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M16.64 2.232a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2-2a1 1 0 0 1 1.414-1.414l1.226 1.226 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m12.173 4-1.328 1.593-.219-.22a2.3 2.3 0 1 0-3.252 3.253l2 2a2.3 2.3 0 0 0 3.393-.154l5-6q.185-.222.305-.472H21a1 1 0 1 1 0 2h-.4l-1.36 8.469a.75.75 0 0 1-.633.623l-11.5 1.65a.75.75 0 0 1-.845-.608l-2-11A.75.75 0 0 1 5 4.25V4z"
      />
    </svg>
  );
};
export default ShoppingCartCheck_02;
