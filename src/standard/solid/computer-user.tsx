import React from "react";
const ComputerUser: React.FC<
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
        d="M10.5 16.75a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 .5.5h2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2a.5.5 0 0 0 .5-.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 2.25A2.75 2.75 0 0 0 1.25 5v10A2.75 2.75 0 0 0 4 17.75h16A2.75 2.75 0 0 0 22.75 15V5A2.75 2.75 0 0 0 20 2.25zm8 3.5a2.25 2.25 0 0 0-1.155 4.182A3.75 3.75 0 0 0 8.25 13.5c0 .415.336.75.75.75h6a.75.75 0 0 0 .75-.75 3.75 3.75 0 0 0-2.595-3.568A2.249 2.249 0 0 0 12 5.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerUser;
