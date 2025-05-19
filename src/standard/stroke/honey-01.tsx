import React from "react";
const Honey_01: React.FC<
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
        d="M17 5H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1M16.5 5 19 9v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9l2.5-4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 13.5 2 1m-2-1-2 1V17l2 1 2-1m-2-3.5V11l2-1 2 1v2.5m-2 1V17m0-2.5 2-1M12 17l2 1 2-1v-2.5l-2-1"
      />
    </svg>
  );
};
export default Honey_01;
