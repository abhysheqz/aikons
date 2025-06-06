import React from "react";
const Ticket_03: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 9.5V6a2 2 0 0 1 2-2h16c1.105 0 2 .897 2 2.002v11.997A2 2 0 0 1 20 20H4a2 2 0 0 1-2-2v-3.5a2.5 2.5 0 0 0 0-5M15 12h3M11 16h7"
      />
    </svg>
  );
};
export default Ticket_03;
