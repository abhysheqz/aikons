import React from "react";
const DoNotTouch_01: React.FC<
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
        d="M21.338 22.75 1.252 2.664 2.666 1.25l20.086 20.086zM9.75 4.202c0-.707-.587-1.28-1.31-1.28-.54 0-1.004.32-1.204.775L9.75 6.212z"
      />
      <path
        fill="currentColor"
        d="M4.602 12.094a1.54 1.54 0 0 0-2.265.123 1.474 1.474 0 0 0-.03 1.83v.002l4.823 6.174v2.527h10.594v-2.652l1.095-1.282-11.69-11.69v7.446zM20.003 15.955V6.987c0-.708-.587-1.281-1.31-1.281s-1.31.573-1.31 1.281V12h-.798V4.759c0-.707-.586-1.281-1.31-1.281-.723 0-1.31.574-1.31 1.281v5.668l6.009 6.008q.03-.238.029-.48M13.168 2.531c0-.707-.587-1.281-1.31-1.281s-1.31.574-1.31 1.281V7.01l2.62 2.62z"
      />
    </svg>
  );
};
export default DoNotTouch_01;
