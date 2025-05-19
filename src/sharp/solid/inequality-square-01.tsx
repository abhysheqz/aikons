import React from "react";
const InequalitySquare_01: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm12.14 5.903-3.878 3.231h5.237v2H8.5a1 1 0 0 1-.64-1.768l6-5zm-7.58 9.231h8.94v-2H7.56z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InequalitySquare_01;
