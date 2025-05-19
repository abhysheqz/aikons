import React from "react";
const GoogleDoc: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M15.022 2.53v4.5h4.5" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.022 11.03h8m-8 3h8m-8 3h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.001 21.931V2.012a.01.01 0 0 1 .01-.01H14.99l5.009 5.019v14.967a.01.01 0 0 1-.01.01L4.01 21.94a.01.01 0 0 1-.01-.01Z"
      />
    </svg>
  );
};
export default GoogleDoc;
