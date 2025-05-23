import React from "react";
const Purse_01: React.FC<
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
        d="M16 4c0-.5 0-2-1.243-2C13 2 9.824 7.003 7 7.003"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 4c0-.5 0-2 1.4-2C11 2 14.825 7.003 18 7.003M4 10h16"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 8.999v-1A1 1 0 0 1 5 7h14a1 1 0 0 1 1 1v.999c0 2.782 2 4.497 2 7.495 0 5.996-7 5.496-10 5.496s-10 .5-10-5.496c0-2.998 2-4.712 2-7.495Z"
      />
    </svg>
  );
};
export default Purse_01;
