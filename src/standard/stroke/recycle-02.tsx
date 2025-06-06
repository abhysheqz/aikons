import React from "react";
const Recycle_02: React.FC<
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
        d="M13.5 17 11 19.5m0 0 2.5 2.5M11 19.5h8.997c1.579 0 2.535-1.742 1.688-3.074L20 14M8 11.5l-.993-3m0 0L3.5 9.5m3.507-1-4.664 8.082c-.906 1.242.088 2.884 1.754 2.896H7M14.5 10l3.935 1m0 0L19.5 7.5M18.435 11 13.6 3.018c-.645-1.389-2.633-1.349-3.508.07L8.5 5.676"
      />
    </svg>
  );
};
export default Recycle_02;
