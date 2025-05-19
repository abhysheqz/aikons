import React from "react";
const Savings: React.FC<
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
        d="M1.25 12.75h4.5v10h-4.5zM8.25 7a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0M7 21.75h9.267l5.699-4.645.01-.008a2.18 2.18 0 0 0 .133-3.209 2.19 2.19 0 0 0-2.876-.186l-3.478 2.548h-2.068a2.003 2.003 0 0 0-1.937-2.5H7z"
      />
    </svg>
  );
};
export default Savings;
