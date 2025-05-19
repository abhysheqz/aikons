import React from "react";
const Calendar_01: React.FC<
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
        d="M12 13.774v-2h4.485v1.55l-1.757 5.45H12.74l1.498-5zM11 18.774H9v-5H8v-2h3z"
      />
    </svg>
  );
};
export default Calendar_01;
