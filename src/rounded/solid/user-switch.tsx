import React from "react";
const UserSwitch: React.FC<
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
        d="M15.685 16.416A5.25 5.25 0 0 0 11.75 21.5c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75c0-2.445-1.672-4.5-3.935-5.084a2.75 2.75 0 1 0-2.63 0M5.685 6.916A5.25 5.25 0 0 0 1.75 12c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75c0-2.445-1.672-4.5-3.935-5.084a2.75 2.75 0 1 0-2.63 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 14.5a1 1 0 0 1 1 1 4 4 0 0 0 2.662 3.771l-.132-.529a1 1 0 1 1 1.94-.485l.5 2A1 1 0 0 1 8.5 21.5c-3.317 0-6-2.683-6-6a1 1 0 0 1 1-1M12.712 2.885A1 1 0 0 1 13.5 2.5c3.317 0 6 2.683 6 6a1 1 0 1 1-2 0 4 4 0 0 0-2.662-3.771l.132.528a1 1 0 0 1-1.94.486l-.5-2a1 1 0 0 1 .182-.858"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserSwitch;
