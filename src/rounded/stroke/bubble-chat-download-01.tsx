import React from "react";
const BubbleChatDownload_01: React.FC<
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
        d="M14.006 2.191A10.5 10.5 0 0 0 12.005 2C6.48 2 2 6.284 2 11.567c0 2.538 1.034 4.845 2.72 6.556.372.377.62.892.52 1.422a5.3 5.3 0 0 1-1.088 2.348 6.5 6.5 0 0 0 4.226-.657c.455-.241.682-.362.842-.386s.39.018.85.104q.959.18 1.935.18c5.373 0 9.758-4.052 9.995-9.134"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7.5c.491.506 1.8 2.5 2.5 2.5M21 7.5c-.491.506-1.8 2.5-2.5 2.5m0 0V2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.996 12h.008M8 12h.009"
      />
    </svg>
  );
};
export default BubbleChatDownload_01;
