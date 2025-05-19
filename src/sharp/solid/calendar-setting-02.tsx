import React from "react";
const CalendarSetting_02: React.FC<
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
        d="M8.588 1.25v1.955h6.825V1.25h1.95v1.955h4.387V22.75H2.25V3.205h4.388V1.25zM4.2 9.75v11.046h15.6V9.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 10.774v1.67a3 3 0 0 1 .94.54l1.42-.828 1.008 1.727-1.42.829a3 3 0 0 1 0 1.123l1.42.829-1.008 1.727-1.42-.829a3 3 0 0 1-.94.54v1.671h-2v-1.67a3 3 0 0 1-.94-.54l-1.42.828-1.008-1.727 1.42-.829a3 3 0 0 1 0-1.123l-1.42-.829 1.008-1.727 1.42.829c.276-.233.593-.418.94-.54v-1.672zm-1 3.5a1 1 0 1 0-.002 1.998A1 1 0 0 0 12 14.274"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CalendarSetting_02;
