import React from "react";
const Authorized: React.FC<
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
        d="M7.916 12.25c-2.592 0-4.666 2.142-4.666 4.75s2.074 4.75 4.666 4.75c1.924 0 3.565-1.183 4.28-2.857H16.5V21c0 .414.336.75.75.75H19a.75.75 0 0 0 .706-.495l.852-2.362H22a.75.75 0 0 0 .75-.75v-2.857a.75.75 0 0 0-.75-.75H11.906c-.816-1.365-2.293-2.286-3.99-2.286m.077 3.25c-.824 0-1.493.672-1.493 1.5s.669 1.5 1.493 1.5h.014c.824 0 1.493-.672 1.493-1.5s-.669-1.5-1.493-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.224 2.25h16.552a.97.97 0 0 1 .974.977V13h-1.947V4.205H3.197V13H1.25V3.227c0-.54.436-.977.974-.977"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Authorized;
