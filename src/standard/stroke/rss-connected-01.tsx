import React from "react";
const RssConnected_01: React.FC<
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
        strokeWidth={1.5}
        d="M2 15.235c2.493 0 4.77 2.265 4.77 4.765M10 20c0-4.5-4.005-8-7.955-8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 19h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 6.5 16 9l5-6M13.5 20H20a2 2 0 0 0 2-2V8M3 9V6a2 2 0 0 1 2-2h6"
      />
    </svg>
  );
};
export default RssConnected_01;
