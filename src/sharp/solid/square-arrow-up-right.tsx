import React from "react";
const SquareArrowUpRight: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm7 7.5h3.188l-4.72 4.72 1.061 1.06 4.72-4.72V14h1.5V8.25H10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowUpRight;
