import React from "react";
const SchoolBell_01: React.FC<
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
        d="M19 9.25a3.25 3.25 0 1 0 1.208 6.268c-1.232 3.235-4.485 5.487-8.958 5.713V18h-1.5v4.75h.75c6.814 0 11.75-4.242 11.75-10.25A3.25 3.25 0 0 0 19 9.25"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 10a8.75 8.75 0 0 1 17.208-2.25 4.75 4.75 0 0 0-2.567 8.72A8.75 8.75 0 0 1 1.75 10m8.602-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SchoolBell_01;
