import React from "react";
const DollarSend_02: React.FC<
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
        d="M6.75 6C4.9 6 3.625 7.294 3.625 8.63c0 .811.22 1.25.564 1.527.394.317 1.15.584 2.561.584 1.578 0 2.976.265 3.989 1.053 1.069.831 1.511 2.081 1.511 3.576 0 1.594-.64 2.815-1.736 3.6C9.468 19.72 8.11 20 6.75 20c-2.826 0-5.5-1.883-5.5-4.63h2c0 1.263 1.356 2.63 3.5 2.63 1.126 0 2.017-.238 2.6-.655.532-.382.9-.976.9-1.975 0-1.097-.308-1.662-.739-1.997-.487-.38-1.34-.632-2.761-.632-1.589 0-2.896-.287-3.814-1.024-.968-.778-1.311-1.894-1.311-3.087C1.625 5.956 4.044 4 6.75 4s5.125 1.956 5.125 4.63h-2C9.875 7.294 8.6 6 6.75 6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.75 21V3h2v18zM18.922 11l-1.293-1.293 1.414-1.414L22.75 12l-3.707 3.707-1.414-1.414L18.922 13h-5.586v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DollarSend_02;
