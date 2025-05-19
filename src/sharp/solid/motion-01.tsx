import React from "react";
const Motion_01: React.FC<
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
      <path fill="currentColor" d="M11.25 11.25h11.5v11.5h-11.5z" />
      <path
        fill="currentColor"
        d="M6.25 6.25h11.5v2.875h-1.917v-.958H8.167v7.666h.958v1.917H6.25z"
      />
      <path
        fill="currentColor"
        d="M1.25 1.25h11.5v2.875h-1.917v-.958H3.167v7.666h.958v1.917H1.25z"
      />
    </svg>
  );
};
export default Motion_01;
