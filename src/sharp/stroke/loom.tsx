import React from "react";
const Loom: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9V4m0 11v5M15 12h5M9 12H4M14.598 10.5l4.33-2.5M9.4 13.5 5.071 16M13.5 14.598l2.5 4.33M10.5 9.4 8 5.071M13.5 9.402l2.5-4.33m-5.5 9.526L8 18.929M14.598 13.5l4.33 2.5M9.4 10.5 5.071 8"
      />
    </svg>
  );
};
export default Loom;
