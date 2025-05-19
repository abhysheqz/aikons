import React from "react";
const Software: React.FC<
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
      <path fill="currentColor" d="M10 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 14a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3zm6 3.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 10a9 9 0 1 1 16.026 5.626 1 1 0 1 1-1.56-1.251A6.97 6.97 0 0 0 19 10a6.97 6.97 0 0 0-1.186-3.9l-1.107 1.107a1 1 0 1 1-1.414-1.414l1.179-1.179a7 7 0 0 0-9.937 9.76 1 1 0 0 1-1.56 1.252A8.97 8.97 0 0 1 3 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Software;
