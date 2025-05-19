import React from "react";
const DollarReceive_02: React.FC<
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
        d="M7 6C5.15 6 3.875 7.294 3.875 8.63c0 .811.22 1.25.564 1.527.394.317 1.15.584 2.561.584 1.578 0 2.976.265 3.989 1.053 1.069.831 1.511 2.081 1.511 3.576 0 1.594-.64 2.815-1.736 3.6C9.718 19.72 8.36 20 7 20c-2.826 0-5.5-1.883-5.5-4.63h2C3.5 16.633 4.856 18 7 18c1.126 0 2.017-.238 2.6-.655.532-.382.9-.976.9-1.975 0-1.097-.308-1.662-.739-1.997-.487-.38-1.34-.632-2.761-.632-1.589 0-2.896-.287-3.814-1.024-.968-.778-1.311-1.894-1.311-3.087C1.875 5.956 4.294 4 7 4s5.125 1.956 5.125 4.63h-2C10.125 7.294 8.85 6 7 6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 21V3h2v18zM16.793 8.293l1.414 1.414L16.914 11H22.5v2h-5.586l1.293 1.293-1.414 1.414L13.086 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DollarReceive_02;
