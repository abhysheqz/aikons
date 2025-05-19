import React from "react";
const ArrowLeft_04: React.FC<
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
        d="M9 12a1 1 0 0 0 1 1h10a1 1 0 1 0 0-2H10a1 1 0 0 0-1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.472 7.118A1 1 0 0 1 11 8v8a1 1 0 0 1-1.555.832l-6-4a1 1 0 0 1 0-1.664l6-4a1 1 0 0 1 1.027-.05"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowLeft_04;
