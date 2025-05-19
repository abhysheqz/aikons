import React from "react";
const Calendar_03: React.FC<
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
        d="M7 12.273h2.009v2H7zm3.996 0h2.008v2h-2.008zm3.995 0H17v2h-2.009zm-7.991 4h2.009v2H7zm3.996 0h2.008v2h-2.008z"
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
export default Calendar_03;
