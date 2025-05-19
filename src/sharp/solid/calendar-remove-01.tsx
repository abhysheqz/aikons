import React from "react";
const CalendarRemove_01: React.FC<
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
        d="m14.336 13.922 3 3 3-3 1.414 1.414-3 3 3 3-1.414 1.414-3-3-3 3-1.414-1.414 3-3-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.588 1.25v1.955h6.825V1.25h1.95v1.955h4.387V12.5H19.8V9.75H4.2v11.046h7.3v1.954H2.25V3.205h4.388V1.25z"
      />
    </svg>
  );
};
export default CalendarRemove_01;
