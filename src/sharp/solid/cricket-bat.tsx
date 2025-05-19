import React from "react";
const CricketBat: React.FC<
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
        d="M16.469 1.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1-.013 1.073l-10.5 10a.75.75 0 0 1-.517.207H9.386L5.035 22.1a2.217 2.217 0 0 1-3.136-3.135l4.35-4.35V12a.75.75 0 0 1 .22-.53zM6.962 16.024l1.014 1.014-1.689 1.689-1.014-1.014zm-2.75 2.75L2.96 20.025a.717.717 0 0 0 1.014 1.014l1.253-1.252z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.748 18.5a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0"
      />
    </svg>
  );
};
export default CricketBat;
