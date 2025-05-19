import React from "react";
const Robot_01: React.FC<
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
        d="M4.25 22a7.75 7.75 0 0 1 15.5 0 .75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25a.75.75 0 0 1 .75.75v1.25h3.75A2.75 2.75 0 0 1 19.25 6v2a4.75 4.75 0 0 1-4.75 4.75h-5A4.75 4.75 0 0 1 4.75 8V6A2.75 2.75 0 0 1 7.5 3.25h3.75V2a.75.75 0 0 1 .75-.75M9.5 6.5a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2zm4.99 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Robot_01;
