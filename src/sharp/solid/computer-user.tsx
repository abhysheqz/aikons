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
        d="M10.5 15.75h3v3.5a.5.5 0 0 0 .5.5h3v2H7v-2h3a.5.5 0 0 0 .5-.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 2.25H1.25v15.5h21.5zM12 5.75a2.25 2.25 0 0 0-1.155 4.182A3.75 3.75 0 0 0 8.25 13.5v.75h7.5v-.75a3.75 3.75 0 0 0-2.595-3.568A2.249 2.249 0 0 0 12 5.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerUser;
