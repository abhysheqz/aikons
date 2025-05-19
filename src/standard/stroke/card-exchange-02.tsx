import React from "react";
const CardExchange_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M1.999 16.5h11M12.001 21.5H2.999a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h9.002a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1ZM10.999 5.5h11M21.001 10.5h-9.002a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h9.002a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.999 10.5v-3a2 2 0 0 1 2-2h3l-1.5 2M20.999 13.5v3a2 2 0 0 1-2 2h-3l1.5-2"
      />
    </svg>
  );
};
export default CardExchange_02;
