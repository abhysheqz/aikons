import React from "react";
const PercentSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm12.207 6.957a1 1 0 0 0-1.414-1.414l-8 8a1 1 0 1 0 1.414 1.414zM9 7.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M13.25 15a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PercentSquare;
