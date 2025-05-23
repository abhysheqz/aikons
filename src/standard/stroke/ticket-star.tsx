import React from "react";
const TicketStar: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.55}
        d="m12.25 15.5 2.25-1.204 2.25 1.204-.5-2.407L18 11.407l-2.442-.198L14.5 9l-1.058 2.209-2.442.198 1.75 1.686z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 9.5V6a2 2 0 0 1 2-2h16c1.105 0 2 .897 2 2.002v11.997A2 2 0 0 1 20 20H4a2 2 0 0 1-2-2v-3.5a2.5 2.5 0 0 0 0-5"
      />
    </svg>
  );
};
export default TicketStar;
