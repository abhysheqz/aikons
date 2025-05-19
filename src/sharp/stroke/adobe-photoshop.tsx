import React from "react";
const AdobePhotoshop: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M6.5 16v-4m0 0V8H11v4z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.5 11.223V10h-4v3h4v3h-4v-1.23"
      />
    </svg>
  );
};
export default AdobePhotoshop;
