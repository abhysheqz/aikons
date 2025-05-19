import React from "react";
const Database_01: React.FC<
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
        d="M5.5 1.75A3.75 3.75 0 0 0 1.75 5.5v5.75h20.5V5.5a3.75 3.75 0 0 0-3.75-3.75zm16.75 11H1.75v5.75a3.75 3.75 0 0 0 3.75 3.75h13a3.75 3.75 0 0 0 3.75-3.75zM13 6.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-6.29.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m1.5 8.464a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12.25 17a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Database_01;
