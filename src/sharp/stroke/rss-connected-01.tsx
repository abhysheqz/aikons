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
      <path stroke="currentColor" strokeWidth={1.5} d="m14 7 2 2 6-6" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 20H22V8M3 10.5V5h9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.982 20h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 16.235c2.493 0 4.77 2.265 4.77 4.765M10 21c0-4.5-4.005-8-7.955-8"
      />
    </svg>
  );
};
export default RssConnected_01;
