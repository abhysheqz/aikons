import React from "react";
const MachineRobot: React.FC<
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
        d="M6.25 8a5.75 5.75 0 1 1 11.5 0v3H6.25zm11.5 10a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75v-5.5h11.5zM12.992 7.5a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M10 6.5a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.25 11.75A.75.75 0 0 1 4 11h2.25v1.5h-1.5v6.604c1.154.326 2 1.387 2 2.646h-1.5a1.25 1.25 0 1 0-2.5 0h-1.5c0-1.259.846-2.32 2-2.646zM20 11a.75.75 0 0 1 .75.75v7.354c1.154.326 2 1.387 2 2.646h-1.5a1.25 1.25 0 1 0-2.5 0h-1.5c0-1.259.846-2.32 2-2.646V12.5h-1.5V11z"
      />
    </svg>
  );
};
export default MachineRobot;
