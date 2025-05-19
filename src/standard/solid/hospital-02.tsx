import React from "react";
const Hospital_02: React.FC<
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
        d="M3.25 8A2.75 2.75 0 0 1 6 5.25h2a.75.75 0 0 1 .75.75v3c0 .138.112.25.25.25h6a.25.25 0 0 0 .25-.25V6a.75.75 0 0 1 .75-.75h2A2.75 2.75 0 0 1 20.75 8v14a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 0 .75-.75v-3a1.75 1.75 0 0 0-1.75-1.75h-3A1.75 1.75 0 0 0 8.75 19v3c0 .414.336.75.75.75H4a.75.75 0 0 1-.75-.75zM9.5 22.75a.75.75 0 0 0 .75-.75v-3a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v3c0 .414.336.75.75.75zM7 14a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m3.991 0a1 1 0 0 1 1-1H12a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1m4.001 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 22a1 1 0 0 1 1-1h19a1 1 0 1 1 0 2h-19a1 1 0 0 1-1-1M7.25 3c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v6A1.75 1.75 0 0 1 15 10.75H9A1.75 1.75 0 0 1 7.25 9zM9 2.75a.25.25 0 0 0-.25.25v6c0 .138.112.25.25.25h6a.25.25 0 0 0 .25-.25V3a.25.25 0 0 0-.25-.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.75a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 0 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5h.75V4.5a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hospital_02;
