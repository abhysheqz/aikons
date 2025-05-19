import React from "react";
const ShoppingBasketRemove_03: React.FC<
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
        d="M15.184 2.052a1 1 0 0 1 1.265.632l1.5 4.5a1 1 0 1 1-1.897.632l-1.5-4.5a1 1 0 0 1 .632-1.264m-5.909-.013a1 1 0 0 1 .687 1.236l-2 7a1 1 0 0 1-1.923-.55l2-7a1 1 0 0 1 1.236-.686M15.293 15.293a1 1 0 0 1 1.414 0l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414L19.914 18.5l1.793 1.793a1 1 0 0 1-1.414 1.414L18.5 19.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 7.25A1.75 1.75 0 0 0 1.25 9v2c0 .323.207.61.513.711l1.092.364 1.744 8.285c.17.81.885 1.39 1.712 1.39h7.304a2.5 2.5 0 0 1 .617-2.518l.732-.732-.732-.733a2.5 2.5 0 1 1 3.536-3.535l.732.732.732-.732a2.5 2.5 0 0 1 1.612-.727l.301-1.43 1.092-.364A.75.75 0 0 0 22.75 11V9A1.75 1.75 0 0 0 21 7.25z"
      />
    </svg>
  );
};
export default ShoppingBasketRemove_03;
