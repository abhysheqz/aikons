import React from "react";
const CalendarCheckOut_01: React.FC<
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
        d="m17.836 14.922 2.914 2.914h.086v.086l.914.914-.914.914v.086h-.086l-2.914 2.914-1.414-1.414 1.5-1.5h-5.586v-2h5.586l-1.5-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.588 1.25v1.955h6.825V1.25h1.95v1.955h4.387V14H19.8V9.75H4.2v11.046H11v1.954H2.25V3.205h4.388V1.25z"
      />
    </svg>
  );
};
export default CalendarCheckOut_01;
