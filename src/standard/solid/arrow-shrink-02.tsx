import React from "react";
const ArrowShrink_02: React.FC<
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
        d="M21.707 2.293a1 1 0 0 1 0 1.414L15.914 9.5H18.5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v2.586l5.793-5.793a1 1 0 0 1 1.414 0M4.5 13.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-2.586l-5.793 5.793a1 1 0 0 1-1.414-1.414L8.086 14.5H5.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowShrink_02;
