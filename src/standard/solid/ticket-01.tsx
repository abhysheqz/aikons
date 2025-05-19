import React from "react";
const Ticket_01: React.FC<
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
        d="M9.75 20.75H20A2.75 2.75 0 0 0 22.75 18v-3.5a.75.75 0 0 0-.75-.75 1.75 1.75 0 1 1 0-3.5.75.75 0 0 0 .75-.75V6A2.75 2.75 0 0 0 20 3.25H9.75zm-1.5-17.5H4A2.75 2.75 0 0 0 1.25 6v3.5c0 .414.336.75.75.75a1.75 1.75 0 1 1 0 3.5.75.75 0 0 0-.75.75V18A2.75 2.75 0 0 0 4 20.75h4.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ticket_01;
