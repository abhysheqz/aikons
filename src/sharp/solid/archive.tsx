import React from "react";
const Archive: React.FC<
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
        d="M3 1.25a.75.75 0 0 0-.75.75v9.25h19.5V2a.75.75 0 0 0-.75-.75zm18.75 11.5H2.25V22c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75zM9 6.25h6v1.5H9zm6 10H9v1.5h6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Archive;
