import React from "react";
const Money_01: React.FC<
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
        d="M22.75 19.75H1.25V4.25h21.5zm-20-1.5h3.18a4 4 0 0 0-3.18-3.18zm18.5-3.18a4 4 0 0 0-3.18 3.18h3.18zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-9.25-.07a4 4 0 0 0 3.18-3.18H2.75zm15.32-3.18a4 4 0 0 0 3.18 3.18V5.75z"
      />
    </svg>
  );
};
export default Money_01;
