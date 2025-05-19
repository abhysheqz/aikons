import React from "react";
const CursorMove_02: React.FC<
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
        strokeWidth={1.5}
        d="m2 2 16 6.222-7.111 2.667L8.222 18z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.5 15.5v-2m0 6v2m-2-4h-2m6 0h2m-5.327-3.173L17.501 13l1.326 1.327m1.846 4.5L22 17.501l-1.327-1.328m-6.346 2.654L13 17.501l1.328-1.328m4.5 4.5L17.5 22l-1.328-1.327"
      />
    </svg>
  );
};
export default CursorMove_02;
