import React from "react";
const Coupon_02: React.FC<
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
        fillRule="evenodd"
        d="M3.646 1.339a.75.75 0 0 1 .77.037L6.96 3.072 9.03 1.414a.75.75 0 0 1 .938 0L12 3.04l2.031-1.626a.75.75 0 0 1 .938 0l2.071 1.658 2.544-1.696A.75.75 0 0 1 20.75 2v20a.75.75 0 0 1-1.166.624l-2.544-1.696-2.071 1.658a.75.75 0 0 1-.937 0L12 20.96l-2.031 1.625a.75.75 0 0 1-.938 0L6.96 20.928l-2.544 1.696A.75.75 0 0 1 3.25 22V2a.75.75 0 0 1 .396-.661m10.647 6.954a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414-1.414zM9.009 8H9a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2M15 14h-.009a1 1 0 1 0 0 2H15a1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Coupon_02;
