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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 2v4m-11-4v4M21 4H3v18h18z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9h18"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.5 15.5 12 18l2.5-2.5M12 12v5.6"
      />
    </svg>
  );
};
export default CalendarDownload_02;
