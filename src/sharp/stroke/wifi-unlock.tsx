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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 15.5c1.268-1.268 2.938-1.732 4.5-1.392M5.5 12c3.173-3.15 6.622-3.833 10-1.985M2 8c6.316-5.333 13.684-5.333 20 0"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.5 15.5V14a2 2 0 0 1 3.5-1.323M15 15.5h7V21h-7z"
      />
    </svg>
  );
};
export default WifiUnlock;
