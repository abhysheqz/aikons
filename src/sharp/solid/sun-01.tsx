import React from "react";
const Sun_01: React.FC<
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
        d="M6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.996 2h2.008v2h-2.008zm6.363 2.636h2.009v2h-2.01zm-12.725 0h2.01v2h-2.01zM2 11.001h2.009v2H2zm17.991 0H22v2h-2.009zM4.634 17.364h2.01v2h-2.01zm12.724 0h2.01v2h-2.01zM10.996 20h2.01v2h-2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sun_01;
