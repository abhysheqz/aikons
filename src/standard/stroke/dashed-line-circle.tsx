import React from "react";
const DashedLineCircle: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 2.2a10.05 10.05 0 0 0-4 0M21.8 10a10.1 10.1 0 0 1 0 4M14 21.8a10.1 10.1 0 0 1-4 0M2.2 14a10.05 10.05 0 0 1 0-4m15.3-6.353A10.1 10.1 0 0 1 20.353 6.5m0 11a10.1 10.1 0 0 1-2.853 2.853m-11 0A10.1 10.1 0 0 1 3.647 17.5m0-11A10.1 10.1 0 0 1 6.5 3.647"
      />
    </svg>
  );
};
export default DashedLineCircle;
