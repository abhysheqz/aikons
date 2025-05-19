import React from "react";
const ArrangeByNumbers_9: React.FC<
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
        d="M7 10V3h-.642L5 4.5M7 10H5m2 0h2M9 17.5V14H5v3.5zm0 0V21H4.5M16.5 4v15.475M14 17.5l2.5 2.5 2.5-2.5"
      />
    </svg>
  );
};
export default ArrangeByNumbers_9;
