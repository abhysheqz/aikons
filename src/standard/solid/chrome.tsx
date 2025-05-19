import React from "react";
const Chrome: React.FC<
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
      <path fill="currentColor" d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0" />
      <path
        fill="currentColor"
        d="M2.974 6.159A10.7 10.7 0 0 0 1.25 12c0 5.154 3.626 9.46 8.467 10.507l3.014-5.56a4.998 4.998 0 0 1-5.068-2.456zM4.322 4.476l3.1 5.51A5 5 0 0 1 12 7h9.519A10.75 10.75 0 0 0 12 1.25a10.72 10.72 0 0 0-7.678 3.226M22.326 9H16c.628.836 1 1.874 1 3 0 .893-.235 1.732-.645 2.458l-4.495 8.291.14.001c5.937 0 10.75-4.813 10.75-10.75 0-1.041-.148-2.048-.424-3"
      />
    </svg>
  );
};
export default Chrome;
