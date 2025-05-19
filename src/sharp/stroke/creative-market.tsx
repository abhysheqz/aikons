import React from "react";
const CreativeMarket: React.FC<
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
        strokeWidth={2}
        d="M17.996 6.01h-.01"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.968 10.216-2.982 1.793m0 0-2.981 1.794m2.981-1.794.018 3.5m-.018-3.5-.018-3.5m.018 3.5 3 1.707m-3-1.707-3-1.706"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 12.007 12 2h10.003v9.952L11.998 21.997a.01.01 0 0 1-.014 0L2 12.022a.01.01 0 0 1 0-.014Z"
      />
    </svg>
  );
};
export default CreativeMarket;
