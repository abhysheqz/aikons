import React from "react";
const ShoppingBasketAdd_01: React.FC<
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
        d="M11.625 3.125a4 4 0 0 0-4 4v.5a1 1 0 0 1-2 0v-.5a6 6 0 1 1 12 0v.5a1 1 0 1 1-2 0v-.5a4 4 0 0 0-4-4M17.625 12.875a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.16 6.625c-.492 0-.94 0-1.3.052-.394.058-.814.196-1.128.579-.31.378-.367.816-.356 1.215.01.368.086.818.17 1.32l1.22 7.275c.193 1.15.349 2.08.563 2.806.223.755.533 1.381 1.09 1.864.56.485 1.22.696 1.99.795.736.094 1.656.094 2.787.094h4.858q.635.001 1.184-.005a2.5 2.5 0 0 1-.113-.745v-1.5h-1.5a2.5 2.5 0 0 1 0-5h1.5v-1.5a2.5 2.5 0 0 1 5 0v1.5h.642l.936-5.584c.085-.502.16-.952.17-1.32.012-.399-.046-.837-.356-1.215-.313-.383-.733-.52-1.128-.579-.359-.052-.807-.052-1.3-.052z"
      />
    </svg>
  );
};
export default ShoppingBasketAdd_01;
