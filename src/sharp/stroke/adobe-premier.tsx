import React from "react";
const AdobePremier: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 16v-5.5h2.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.995 12h4.01a.01.01 0 0 0 .01-.01V7.995a.01.01 0 0 0-.01-.01h-4.01zm0 0v4.749"
      />
    </svg>
  );
};
export default AdobePremier;
