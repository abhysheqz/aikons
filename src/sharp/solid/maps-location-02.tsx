import React from "react";
const MapsLocation_02: React.FC<
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
        d="M18 11.25c-2.63 0-4.75 2.152-4.75 4.79 0 1.52.614 2.707 1.753 3.716.686.608 1.902 1.89 2.357 2.634a.75.75 0 0 0 1.268.02c.49-.751 1.697-2.058 2.37-2.654 1.138-1.009 1.752-2.197 1.752-3.716 0-2.638-2.12-4.79-4.75-4.79M17.991 14c-1.1 0-1.991.895-1.991 2s.891 2 1.991 2h.018c1.1 0 1.991-.895 1.991-2s-.891-2-1.991-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m13.19 20.04-4.44-1.907V1.25l5.5 2.36v7.397a6.3 6.3 0 0 0-2.5 5.033c0 1.582.525 2.899 1.44 4M22.75 11.952V4.748a.75.75 0 0 0-.75-.75h-6.25v6.171A6.2 6.2 0 0 1 18 9.75a6.21 6.21 0 0 1 4.75 2.202M1.658 4.164 7.25 1.297v16.747l-5.013 1.668A.75.75 0 0 1 1.25 19V4.831a.75.75 0 0 1 .408-.667"
      />
    </svg>
  );
};
export default MapsLocation_02;
