import React from "react";
const ArrangeByNumbers_1: React.FC<
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
        d="M7 21v-7h-.642L5 15.5M7 21H5m2 0h2M9 6.5V3H5v3.5zm0 0V10H4.5M16.5 4v15.298M14 17.5l2.5 2.5 2.5-2.5"
      />
    </svg>
  );
};
export default ArrangeByNumbers_1;
