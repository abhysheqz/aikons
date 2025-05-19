import React from "react";
const Ramadhan_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.572 15C.154 7 10.512 5 12.5 2c1.988 3 12.347 5 5.927 13v7H6.572z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 12.434A3.23 3.23 0 1 1 11.066 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.5 9h.009"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m18.5 19-3-2.5-4 3" />
      <path stroke="currentColor" strokeWidth={1.5} d="m13 18.5-2.5-2-4 2.5" />
    </svg>
  );
};
export default Ramadhan_02;
