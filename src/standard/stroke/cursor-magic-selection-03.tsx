import React from "react";
const CursorMagicSelection_03: React.FC<
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
        d="M9 4V2M5 5 3.5 3.5M4 9H2m3 4-1.5 1.5m11-11L13 5M11.869 21.556 7.028 7.648a.487.487 0 0 1 .62-.62l13.92 4.838c.39.136.444.664.091.877l-3.749 2.263a.487.487 0 0 0-.092.762l4.038 4.014c.191.19.192.5.001.69l-1.386 1.385a.49.49 0 0 1-.69 0l-4.028-4.026a.487.487 0 0 0-.762.093l-2.245 3.723a.488.488 0 0 1-.877-.09"
      />
    </svg>
  );
};
export default CursorMagicSelection_03;
