import React from "react";
const CalendarSetting_01: React.FC<
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
        d="M17.886 12.75v1.645c.537.16 1.02.446 1.415.823l1.457-.833.992 1.737-1.456.832a3.5 3.5 0 0 1 0 1.592l1.456.832-.992 1.736-1.456-.832a3.5 3.5 0 0 1-1.416.823v1.645h-2v-1.645a3.5 3.5 0 0 1-1.416-.823l-1.457.832-.992-1.736 1.456-.832a3.5 3.5 0 0 1 0-1.592l-1.456-.832.992-1.737 1.457.833a3.5 3.5 0 0 1 1.416-.823V12.75zm-1 3.5a1.499 1.499 0 1 0 0 3 1.5 1.5 0 1 0 0-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.588 1.25v1.955h6.825V1.25h1.95v1.955h4.387V12H19.8V9.75H4.2v11.046H10v1.954H2.25V3.205h4.388V1.25z"
      />
    </svg>
  );
};
export default CalendarSetting_01;
