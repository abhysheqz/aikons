import React from "react";
const PermanentJob: React.FC<
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
        d="M4 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V10a3 3 0 0 0-3-3h-5V4a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6a1 1 0 1 0 2 0zm13.5 6.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 6a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M5 9a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M3.25 14a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-2 8a4.75 4.75 0 1 1 9.5 0 .75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PermanentJob;
