import React from "react";
const Logout_02: React.FC<
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
        d="M10.894 2.553a1 1 0 0 1-.447 1.342L5.553 6.342A1 1 0 0 0 5 7.236v9.528a1 1 0 0 0 .553.895l4.894 2.447a1 1 0 1 1-.894 1.789l-4.895-2.448A3 3 0 0 1 3 16.764V7.236a3 3 0 0 1 1.658-2.683l4.895-2.447a1 1 0 0 1 1.341.447"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.117 8.576a1 1 0 0 1 1.09.217l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5A1 1 0 0 1 16.5 14.5V13H10a1 1 0 1 1 0-2h6.5V9.5a1 1 0 0 1 .617-.924"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Logout_02;
