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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12c0-3.317 2.683-6 6-6L8 8M21 12c0 3.317-2.683 6-6 6l1-2M18 9h-3c-1.414 0-2.121 0-2.56-.44C12 8.122 12 7.415 12 6s0-2.121.44-2.56C12.878 3 13.585 3 15 3h3c1.414 0 2.121 0 2.56.44C21 3.878 21 4.585 21 6s0 2.121-.44 2.56C20.122 9 19.415 9 18 9M9 21H6c-1.414 0-2.121 0-2.56-.44C3 20.122 3 19.415 3 18s0-2.121.44-2.56C3.878 15 4.585 15 6 15h3c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56s0 2.121-.44 2.56C11.122 21 10.415 21 9 21"
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
