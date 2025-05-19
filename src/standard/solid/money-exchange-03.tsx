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
        d="M1.25 12A6.746 6.746 0 0 1 8 5.25l.097.006a.75.75 0 0 1 .611.99l-.037.089-1 2a.75.75 0 0 1-1.342-.67l.377-.755A5.25 5.25 0 0 0 2.75 12a.75.75 0 0 1-1.5 0M20.75 12A6.746 6.746 0 0 1 14 18.75l-.097-.006a.75.75 0 0 1-.611-.99l.037-.089 1-2a.75.75 0 0 1 1.342.67l-.377.755A5.25 5.25 0 0 0 19.25 12a.75.75 0 0 1 1.5 0M19 2.25c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 19 9.75h-7A1.75 1.75 0 0 1 10.25 8V4c0-.966.784-1.75 1.75-1.75zM15.5 5a1 1 0 1 0 0 2h.009l.102-.005a1 1 0 0 0 0-1.99L15.51 5zM10 14.25c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 10 21.75H3A1.75 1.75 0 0 1 1.25 20v-4c0-.966.784-1.75 1.75-1.75zM6.5 17a1 1 0 1 0 0 2h.009l.102-.005a1 1 0 0 0 0-1.99L6.51 17z"
      />
    </svg>
  );
};
export default MoneyExchange_03;
