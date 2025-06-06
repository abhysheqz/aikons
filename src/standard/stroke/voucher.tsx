import React from "react";
const Voucher: React.FC<
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
        d="M4.563 4.558 7.4 7m0 0 3.6 3M7.4 7 4.505 9.386M7.4 7 11 4m-9-.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m0 7a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M8 15v-2m11.5-6c.464 0 .697 0 .89.038A2 2 0 0 1 21.96 8.61c.039.193.039.425.039.89v0m0 9c0 .465 0 .697-.039.89a2 2 0 0 1-1.571 1.572c-.194.038-.426.038-.89.038v0m-9 0c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C8 19.197 8 18.964 8 18.5v0m6 2.5h2m6-6v-2m-6-6h-2"
      />
    </svg>
  );
};
export default Voucher;
