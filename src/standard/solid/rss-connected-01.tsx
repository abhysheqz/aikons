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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.045 12a1 1 0 0 1 1-1C6.51 11 11 14.911 11 20a1 1 0 1 1-2 0c0-3.911-3.52-7-6.955-7a1 1 0 0 1-1-1M1 15.235a1 1 0 0 1 1-1c3.043 0 5.77 2.71 5.77 5.765a1 1 0 1 1-2 0c0-1.945-1.827-3.765-3.77-3.765a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 19a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M21.64 2.232a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.726 1.726 4.299-5.16a1 1 0 0 1 1.408-.127M5 5a1 1 0 0 0-1 1v2.511a1 1 0 0 1-2 0V6a3 3 0 0 1 3-3h6a1 1 0 1 1 0 2zm17 2a1 1 0 0 1 1 1v10a3 3 0 0 1-3 3h-6.5a1 1 0 1 1 0-2H20a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RssConnected_01;
