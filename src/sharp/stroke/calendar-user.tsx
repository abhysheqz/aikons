import React from "react";
const CalendarUser: React.FC<
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
        d="M17.5 18.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 0A3.5 3.5 0 0 1 21 22m-3.5-3.5A3.5 3.5 0 0 0 14 22M16.5 2v4m-9-4v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11 22H3V4h18v9M3 10h18"
      />
    </svg>
  );
};
export default CalendarUser;
