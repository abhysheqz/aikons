import React from "react";
const LiveStreaming_02: React.FC<
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
      <path fill="currentColor" d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.207 7.293a1 1 0 0 1 0 1.414C7.437 9.477 7 10.698 7 12s.437 2.523 1.207 3.293a1 1 0 1 1-1.414 1.414C5.563 15.477 5 13.698 5 12s.563-3.477 1.793-4.707a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.207 5.293a1 1 0 0 1 0 1.414C3.874 8.04 3 9.793 3 12s.874 3.96 2.207 5.293a1 1 0 1 1-1.414 1.414C2.126 17.04 1 14.793 1 12s1.126-5.04 2.793-6.707a1 1 0 0 1 1.414 0M15.793 7.293a1 1 0 0 1 1.414 0C18.437 8.523 19 10.302 19 12s-.563 3.477-1.793 4.707a1 1 0 0 1-1.414-1.414C16.563 14.523 17 13.302 17 12s-.437-2.523-1.207-3.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.793 5.293a1 1 0 0 1 1.414 0C21.874 6.96 23 9.207 23 12s-1.126 5.04-2.793 6.707a1 1 0 0 1-1.414-1.414C20.126 15.96 21 14.207 21 12s-.874-3.96-2.207-5.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LiveStreaming_02;
