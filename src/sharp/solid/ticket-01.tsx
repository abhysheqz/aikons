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
        d="M9.75 21.25H22a.75.75 0 0 0 .75-.75v-6.75h-1.224a1.75 1.75 0 1 1 0-3.5h1.224V3.5a.75.75 0 0 0-.75-.75H9.75zM8.25 2.75H2a.75.75 0 0 0-.75.75v6.75h1.223a1.75 1.75 0 1 1 0 3.5H1.25v6.75c0 .414.336.75.75.75h6.25z"
      />
    </svg>
  );
};
export default Ticket_01;
