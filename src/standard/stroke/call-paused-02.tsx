import React from "react";
const CallPaused_02: React.FC<
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
        d="M19 3v6m-4-6v6M7.34 3H3.987A.98.98 0 0 0 3 4.002Q3.48 20.52 19.998 21A.98.98 0 0 0 21 20.013V16.66a1 1 0 0 0-.594-.914l-3.34-1.485a1 1 0 0 0-1.048.146l-2.053 1.71c-.289.242-.69.301-1.033.147-2.873-1.293-3.903-2.323-5.196-5.195a.99.99 0 0 1 .146-1.034l1.711-2.053a1 1 0 0 0 .146-1.047l-1.485-3.34A1 1 0 0 0 7.34 3"
      />
    </svg>
  );
};
export default CallPaused_02;
