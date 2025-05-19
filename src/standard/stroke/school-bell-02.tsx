import React from "react";
const SchoolBell_02: React.FC<
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
        strokeWidth={1.5}
        d="M19 17a4.9 4.9 0 0 1-1.427 2.657A5.2 5.2 0 0 1 15 21M7 5a5.2 5.2 0 0 0-2.596 1.404A5.2 5.2 0 0 0 3 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 9 3.89-5.124a2.303 2.303 0 1 1 3.234 3.235L15 11M4.17 12.441a1.09 1.09 0 0 0-.87.302c-.4.4-.4 1.047 0 1.447l6.51 6.51c.4.4 1.047.4 1.447 0 .228-.227.33-.549.302-.87-.121-1.378.181-2.336 1.552-3.223a4.135 4.135 0 1 0-5.718-5.718c-.887 1.37-1.845 1.673-3.223 1.552M4.686 16A2.343 2.343 0 0 0 8 19.314"
      />
    </svg>
  );
};
export default SchoolBell_02;
