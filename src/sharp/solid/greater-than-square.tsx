import React from "react";
const GreaterThanSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm6.293 6.457L12.586 12l-3.293 3.293 1.414 1.414L15.415 12l-4.708-4.707z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GreaterThanSquare;
