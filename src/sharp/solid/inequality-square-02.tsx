import React from "react";
const InequalitySquare_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm5.86 5.903 3.878 3.231H7.501v2H15.5a1 1 0 0 0 .64-1.768l-6-5zm7.58 9.231H7.5v-2h8.94z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InequalitySquare_02;
