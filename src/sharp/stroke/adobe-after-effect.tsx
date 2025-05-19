import React from "react";
const AdobeAfterEffect: React.FC<
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
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m5.776 16.723 3.228-9.214 3.217 9.216m-5.14-3.729h3.838"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.998 14.25v1.74a.01.01 0 0 1-.01.01h-3.484v-6h3.476a.01.01 0 0 1 .01.01l.032 2.852a.01.01 0 0 1-.01.01h-3.51"
      />
    </svg>
  );
};
export default AdobeAfterEffect;
