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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M3 12c0-3.317 2.683-6 6-6v.5L8 8M21 12c0 3.317-2.683 6-6 6v-.5l1-1.5M12 9V3h9v6zM3 21v-6h9v6z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.5 6h.009M7.5 18h.009"
      />
    </svg>
  );
};
export default MoneyExchange_03;
