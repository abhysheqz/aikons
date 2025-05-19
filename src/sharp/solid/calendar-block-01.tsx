import React from "react";
const CalendarBlock_01: React.FC<
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
        d="M17.25 15.75a2.5 2.5 0 0 0-2.328 3.414l3.242-3.242a2.5 2.5 0 0 0-.914-.172m2.328 1.586-3.242 3.242a2.5 2.5 0 0 0 3.241-3.241m-6.828.914a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.588 1.25v1.955h6.825V1.25h1.95v1.955h4.387V13H19.8V9.75H4.2v11.046H12v1.954H2.25V3.205h4.388V1.25z"
      />
    </svg>
  );
};
export default CalendarBlock_01;
