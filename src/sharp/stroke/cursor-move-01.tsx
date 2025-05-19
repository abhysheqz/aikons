import React from "react";
const CursorMove_01: React.FC<
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
        d="M14.5 4.5v-2m0 6v2m-2-3.999h-2m6 0h2m-5.327-3.173 1.328-1.327 1.327 1.327m1.845 4.5L19 6.501l-1.327-1.327m-6.346 2.654L10 6.501l1.328-1.327m4.5 4.5L14.5 11l-1.327-1.327"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16.975 11.708 19 13.5l-6.23.898 2.618 6.48L12.61 22l-2.618-6.48L5 19.5 6 2l2.822 2.497"
      />
    </svg>
  );
};
export default CursorMove_01;
