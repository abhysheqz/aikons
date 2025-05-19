import React from "react";
const ComputerPhoneSync: React.FC<
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
        d="M10.5 16.75a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v5H8a1 1 0 1 1 0-2h2a.5.5 0 0 0 .5-.5zM15.25 12c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v8A1.75 1.75 0 0 1 21 21.75h-4A1.75 1.75 0 0 1 15.25 20z"
      />
      <path
        fill="currentColor"
        d="M4 2.25A2.75 2.75 0 0 0 1.25 5v10A2.75 2.75 0 0 0 4 17.75h9.5V12A3.5 3.5 0 0 1 17 8.5h4c.637 0 1.235.17 1.75.468V5A2.75 2.75 0 0 0 20 2.25z"
      />
    </svg>
  );
};
export default ComputerPhoneSync;
