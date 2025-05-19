import React from "react";
const MoneyExchange_03: React.FC<
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
        d="M2.25 12A6.746 6.746 0 0 1 9 5.25h.75v1.478l-.126.188L8.208 9.04 6.96 8.208l.886-1.33A5.246 5.246 0 0 0 3.75 12v.75h-1.5zM21.75 12A6.746 6.746 0 0 1 15 18.75h-.75v-1.477l.126-.189 1.416-2.124 1.248.832-.886 1.33A5.246 5.246 0 0 0 20.25 12v-.75h1.5zM21.75 2.25v7.5h-10.5v-7.5zM16.5 5a1 1 0 1 0 0 2h.009l.102-.005a1 1 0 0 0 0-1.99L16.51 5zM12.75 14.25v7.5H2.25v-7.5zM7.5 17a1 1 0 1 0 0 2h.009l.102-.005a1 1 0 0 0 0-1.99L7.51 17z"
      />
    </svg>
  );
};
export default MoneyExchange_03;
