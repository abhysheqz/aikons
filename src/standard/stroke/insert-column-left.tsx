import React from "react";
const InsertColumnLeft: React.FC<
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
        d="m5.5 9.001-3 3 3 3m-2-3h7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15 2.499v19M21.5 8.499H15m6.5 7H15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 7.001v-1.5a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-1.5"
      />
    </svg>
  );
};
export default InsertColumnLeft;
