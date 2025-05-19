import React from "react";
const Cashier_02: React.FC<
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
        d="M10 19.5h4"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M19.5 2.5h-6v3h6z" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16.5 5.5v3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.5 21.5v-4l-2-9h-15l-2 9v4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 17.5h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M7.5 11.5H8m3.75 0h.5m3.75 0h.5M7.5 14.5H8m3.75 0h.5m3.75 0h.5"
      />
    </svg>
  );
};
export default Cashier_02;
