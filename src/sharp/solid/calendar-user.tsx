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
        fill="currentColor"
        d="M15 16.25a2.5 2.5 0 1 1 4.185 1.847A4.25 4.25 0 0 1 21.75 22v.75h-8.5V22a4.25 4.25 0 0 1 2.565-3.903A2.5 2.5 0 0 1 15 16.25"
      />
      <path
        fill="currentColor"
        d="M8.588 1.25v1.955h6.825V1.25h1.95v1.955h4.387V13H19.8V9.75H4.2v11.046h7.3v1.954H2.25V3.205h4.388V1.25z"
      />
    </svg>
  );
};
export default CalendarUser;
