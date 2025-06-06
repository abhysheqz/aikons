import React from "react";
const SelfTransfer: React.FC<
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
        d="m9 14.998-4 6.5m2.877-4.932-1.473-.92a.97.97 0 0 0-1.338.313L3.648 18.24a.983.983 0 0 0 .287 1.335l1.572 1.052M10 12.998l1.67-3.342a3 3 0 0 1 2.684-1.658h.54a3 3 0 0 1 2.497 1.336l1.11 1.664 2 1.5m-4.5-4v5.369q0 .131.033.258L18 21.498l-4.496-6.744A3 3 0 0 1 13 13.09V9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14.5 16.953 12 21.5l3.5-4M14.5 5.498a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </svg>
  );
};
export default SelfTransfer;
