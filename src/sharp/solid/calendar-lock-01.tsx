import React from "react";
const CalendarLock_01: React.FC<
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
        d="M14.736 15.645v-.893a2.752 2.752 0 0 1 5.504 0v.893h1.506v7.104H13.25v-7.104zm2-.893a.752.752 0 1 1 1.504 0v.893h-1.505z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.588 1.25v1.955h6.825V1.25h1.95v1.955h4.387v8.772H19.8V9.75H4.2v11.046H12v1.954H2.25V3.205h4.388V1.25z"
      />
    </svg>
  );
};
export default CalendarLock_01;
