import React from "react";
const ArrowReloadHorizontal: React.FC<
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
        d="M20.5 5.5h-11C5.787 5.5 3 8.185 3 12M3.5 18.5h11c3.713 0 6.5-2.685 6.5-6.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 3S21 4.841 21 5.5 18.5 8 18.5 8M5.5 16S3 17.841 3 18.5 5.5 21 5.5 21"
      />
    </svg>
  );
};
export default ArrowReloadHorizontal;
