import React from "react";
const ArrowDownRight_01: React.FC<
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
        d="m5.999 5.999 11.655 11.655m-6.653.347h7v-7.007"
      />
    </svg>
  );
};
export default ArrowDownRight_01;
