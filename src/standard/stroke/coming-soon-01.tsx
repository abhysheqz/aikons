import React from "react";
const ComingSoon_01: React.FC<
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
        d="M18 8A6 6 0 1 0 6 8a6 6 0 0 0 12 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 8.5 12 8V5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5 17H2.55a.55.55 0 0 0-.55.55v1.4c0 .304.246.55.55.55h1.9a.55.55 0 0 1 .55.55v1.4a.55.55 0 0 1-.55.55H2m20-5v4.691a.31.31 0 0 1-.585.138l-2.33-4.658a.309.309 0 0 0-.585.138V22m-5 0h2a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5ZM8 22h2a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H8a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5Z"
      />
    </svg>
  );
};
export default ComingSoon_01;
