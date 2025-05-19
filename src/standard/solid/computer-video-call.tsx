import React from "react";
const ComputerVideoCall: React.FC<
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
        d="M1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.83 17.25H9.17l.381 1.014c.347.92.225 2.01-.244 2.736H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2h-2.307c-.469-.725-.591-1.815-.244-2.736zM12 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
      />
      <path
        fill="currentColor"
        d="M16.618 13.575c-2.195-3.193-7.109-3.003-9.23-.008A.75.75 0 0 0 8 14.75h8a.75.75 0 0 0 .618-1.175"
      />
    </svg>
  );
};
export default ComputerVideoCall;
