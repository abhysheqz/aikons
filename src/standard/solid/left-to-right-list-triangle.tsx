import React from "react";
const LeftToRightListTriangle: React.FC<
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
        d="M2.386 2.094a.75.75 0 0 1 .761.02l4 2.5a.75.75 0 0 1 0 1.272l-4 2.5A.75.75 0 0 1 2 7.75v-5a.75.75 0 0 1 .386-.656M2.386 15.094a.75.75 0 0 1 .761.02l4 2.5a.75.75 0 0 1 0 1.272l-4 2.5A.75.75 0 0 1 2 20.75v-5a.75.75 0 0 1 .386-.656"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.75 5.25a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1M9.75 11.75a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1M9.75 18.25a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListTriangle;
