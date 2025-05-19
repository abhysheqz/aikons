import React from "react";
const CalendarLove_02: React.FC<
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
        d="M7 14.081c0-1.367 1.027-2.558 2.5-2.558.793 0 1.369.3 1.75.63.381-.33.957-.63 1.75-.63 1.473 0 2.5 1.191 2.5 2.558 0 1.62-1.1 2.843-2.024 3.594a10 10 0 0 1-1.305.89 29 29 0 0 1-.921.458s-.744-.357-.921-.458a10 10 0 0 1-1.305-.89C8.1 16.924 7 15.701 7 14.081"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.088 1.25v1.955h6.825V1.25h1.95v1.955h4.387V22.75H1.75V3.205h4.388V1.25zM3.7 9.75v11.046h15.6V9.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CalendarLove_02;
