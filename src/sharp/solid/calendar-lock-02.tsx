import React from "react";
const CalendarLock_02: React.FC<
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
        d="M8.587 1.25v1.955h6.826V1.25h1.95v1.955h4.387V22.75H2.25V3.205h4.387V1.25zM4.2 9.75v11.046h15.6V9.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.248 14.022v-.741a2.257 2.257 0 1 0-4.514 0v.742H8.25v5.5l7.5-.001v-5.5zm-3.014-.741a.757.757 0 1 1 1.515 0v.742h-1.515z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CalendarLock_02;
