import React from "react";
const CalendarRemove_02: React.FC<
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
        d="M14.5 13.5 12 16m0 0-2.5 2.5M12 16l2.5 2.5M12 16l-2.5-2.5M16.5 2v4m-9-4v4M21 4H3v18h18zM3 10h18"
      />
    </svg>
  );
};
export default CalendarRemove_02;
