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
      <path
        fill="currentColor"
        d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0M8.207 8.707C7.437 9.477 7 10.7 7 12s.437 2.523 1.207 3.293l-1.414 1.414C5.563 15.477 5 13.7 5 12s.563-3.477 1.793-4.707zM17.207 7.293C18.437 8.523 19 10.302 19 12c0 1.699-.563 3.477-1.793 4.707l-1.414-1.414C16.563 14.523 17 13.302 17 12c0-1.301-.437-2.523-1.207-3.293z"
      />
      <path
        fill="currentColor"
        d="M5.207 6.707C3.874 8.04 3 9.793 3 12s.874 3.96 2.207 5.293l.293.293L4.086 19l-.293-.293C2.126 17.04 1 14.793 1 12s1.126-5.04 2.793-6.707L4.086 5 5.5 6.414zM20.207 5.293C21.874 6.96 23 9.207 23 12s-1.126 5.04-2.793 6.707l-.293.293-1.414-1.414.293-.293C20.126 15.96 21 14.207 21 12s-.874-3.96-2.207-5.293l-.293-.293L19.914 5z"
      />
    </svg>
  );
};
export default LiveStreaming_02;
