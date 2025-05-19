import React from "react";
const BasketballHoop: React.FC<
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
        d="M4 1a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3 1 1 0 1 0 0-2 1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1 1 1 0 1 0 0 2 3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm1.5 11a1 1 0 1 0 0 2h.955l1.053 8.129a1 1 0 1 0 1.984-.258L9.379 21H11v1a1 1 0 1 0 2 0v-1h1.621l-.113.871a1 1 0 0 0 1.984.258L17.545 14h.955a1 1 0 1 0 0-2zm9.38 7 .195-1.5H13V19zM11 19v-1.5H8.925l.194 1.5zm-2.334-3.5H11V14H8.471zm4.334 0h2.334l.195-1.5H13zM7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1a1 1 0 0 1-2 0V9H9v1a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BasketballHoop;
