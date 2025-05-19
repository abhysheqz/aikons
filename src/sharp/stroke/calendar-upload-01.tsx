import React from "react";
const CalendarUpload_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m15 17.5 2.5-2.5 2.5 2.5m-2.5-2V22M16.5 2v4m-9-4v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21 13V4H3v18h10M3 10h18"
      />
    </svg>
  );
};
export default CalendarUpload_01;
