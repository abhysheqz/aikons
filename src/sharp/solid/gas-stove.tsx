import React from "react";
const GasStove: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm3.125 16.62h4v-1.5h-4zm11.75-1.5v1.51h-1.5v-1.51zm-9.425-8a3.76 3.76 0 0 1 2.925-2.924V5.12h1.5v1.325A3.76 3.76 0 0 1 16.3 9.37h1.325v1.5H16.3a3.76 3.76 0 0 1-2.925 2.925v1.325h-1.5v-1.325A3.76 3.76 0 0 1 8.95 10.87H7.625v-1.5zm1.425.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GasStove;
