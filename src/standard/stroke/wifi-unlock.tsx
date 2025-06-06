import React from "react";
const WifiUnlock: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 15.5c1.133-1.133 2.588-1.625 4-1.473M5.5 12c3.017-2.994 6.283-3.76 9.5-2.24M2 8c6.316-5.333 13.684-5.333 20 0M16.5 15.5H15V21h7v-5.5h-5.5m0 0V14a2 2 0 0 1 3.5-1.323"
      />
    </svg>
  );
};
export default WifiUnlock;
