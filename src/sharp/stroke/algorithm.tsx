import React from "react";
const Algorithm: React.FC<
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
        strokeWidth={1.5}
        d="M15.5 4.5h-7v7h7zM21 19h-3v3h3zM6 19H3v3h3zM13.5 19h-3v3h3z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 2v2.5m3-2.5v2.5m-5 2H6m2.5 3H6m12-3h-2.5m2.5 3h-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 19v-7.5"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M19.5 19v-4h-15v4" />
    </svg>
  );
};
export default Algorithm;
