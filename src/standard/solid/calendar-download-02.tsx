import React from "react";
const CalendarDownload_02: React.FC<
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
        d="M6 1a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m12 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M11.293 19.207a1 1 0 0 0 1.414 0l2-2A1 1 0 0 0 14 15.5h-1V12a1 1 0 1 0-2 0v3.5h-1a1 1 0 0 0-.707 1.707z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 5.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3V20a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3zm2 4V20a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V9.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CalendarDownload_02;
