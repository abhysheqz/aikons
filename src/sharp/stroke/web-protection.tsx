import React from "react";
const WebProtection: React.FC<
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
        d="M3 7.998h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 4.999h.009M11 4.999h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 19.997H3.01a.01.01 0 0 1-.01-.01V2.01a.01.01 0 0 1 .01-.01h17.98a.01.01 0 0 1 .01.01v17.978a.01.01 0 0 1-.01.01H18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.5 17.502v-2.5c-2 0-3.5-1-3.5-1s-1.5 1-3.5 1v2.5c0 3.5 3.5 4.5 3.5 4.5s3.5-1 3.5-4.5Z"
      />
    </svg>
  );
};
export default WebProtection;
