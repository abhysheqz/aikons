import React from "react";
const CalendarUpload_02: React.FC<
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
        d="m12 11.066.914.914H13v.086l2.914 2.914-1.414 1.414-1.5-1.5v4.586h-2v-4.586l-1.5 1.5-1.414-1.414L11 12.066v-.086h.086z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.588 1.25v1.955h6.825V1.25h1.95v1.955h4.387V22.75H2.25V3.205h4.388V1.25zM4.2 9.75v11.046h15.6V9.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CalendarUpload_02;
