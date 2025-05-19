import React from "react";
const CalendarCheckIn_01: React.FC<
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
        d="M8.588 1.25v1.955h6.825V1.25h1.95v1.955h4.387V15H19.8V9.75H4.2v11.046H12v1.954H2.25V3.205h4.388V1.25z"
      />
      <path
        fill="currentColor"
        d="M21.75 17.836v2h-5.586l1.5 1.5-1.414 1.414-3.914-3.914 3.914-3.914 1.414 1.414-1.5 1.5z"
      />
    </svg>
  );
};
export default CalendarCheckIn_01;
