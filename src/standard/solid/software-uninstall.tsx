import React from "react";
const SoftwareUninstall: React.FC<
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
      <path fill="currentColor" d="M10 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path
        fill="currentColor"
        d="M3 10a9 9 0 1 1 16.867 4.374h-2.402A6.97 6.97 0 0 0 19 10a6.97 6.97 0 0 0-1.186-3.9l-1.107 1.107a1 1 0 1 1-1.414-1.414l1.179-1.179a7 7 0 0 0-9.937 9.76 1 1 0 0 1-1.56 1.252A8.97 8.97 0 0 1 3 10"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.793 16.293a1 1 0 0 1 1.414 0L19 18.086l1.793-1.793a1 1 0 0 1 1.414 1.414L20.414 19.5l1.793 1.793a1 1 0 0 1-1.414 1.414L19 20.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5 14a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h9.208a2.5 2.5 0 0 1 .524-2.768l.732-.732-.732-.732a2.5 2.5 0 0 1 3.536-3.536l.732.732.732-.732A2.5 2.5 0 0 1 20.8 14.6 3 3 0 0 0 19 14z"
      />
    </svg>
  );
};
export default SoftwareUninstall;
