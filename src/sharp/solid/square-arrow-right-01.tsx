import React from "react";
const SquareArrowRight_01: React.FC<
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
        d="M2.999 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm6.219 5.375 3.5 4.375-3.5 4.375 1.562 1.25L15.28 12l-4.5-5.625z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowRight_01;
