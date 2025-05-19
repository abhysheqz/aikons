import React from "react";
const HoldLocked_01: React.FC<
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
        d="M18.5 13.25a2.25 2.25 0 0 0-2.25 2.25v.75h-1.5v6.5h7.5v-6.5h-1.5v-.75a2.25 2.25 0 0 0-2.25-2.25m.75 2.25v.75h-1.5v-.75a.75.75 0 0 1 1.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.294 2.531c0-.707.587-1.281 1.31-1.281s1.31.574 1.31 1.281v8.355h.798V4.759c0-.707.587-1.281 1.31-1.281s1.31.574 1.31 1.281v7.24h.798V6.988c0-.708.586-1.281 1.31-1.281.723 0 1.31.573 1.31 1.281v4.976a3.751 3.751 0 0 0-4.925 2.787H13.25v8H6.877v-2.527l-4.822-6.174-.001-.002a1.474 1.474 0 0 1 .03-1.83 1.54 1.54 0 0 1 2.266-.123l2.527 2.478V4.202c0-.707.586-1.28 1.31-1.28.723 0 1.31.573 1.31 1.28v5.57h.797z"
      />
    </svg>
  );
};
export default HoldLocked_01;
