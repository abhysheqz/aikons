import React from "react";
const CalendarAdd_02: React.FC<
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
        d="M12 13v6m3-3H9M16.5 2v4m-9-4v4M21 4H3v18h18zM3 10h18"
      />
    </svg>
  );
};
export default CalendarAdd_02;
