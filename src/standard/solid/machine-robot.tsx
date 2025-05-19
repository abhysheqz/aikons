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
        d="M6.25 8a5.75 5.75 0 1 1 11.5 0v2.25H6.254v1.5H17.75V16A2.75 2.75 0 0 1 15 18.75H9A2.75 2.75 0 0 1 6.25 16v-4.25H6c-.69 0-1.25.56-1.25 1.25v5.354c1.154.326 2 1.387 2 2.646a.75.75 0 0 1-1.5 0 1.25 1.25 0 1 0-2.5 0 .75.75 0 0 1-1.5 0c0-1.259.846-2.32 2-2.646V13A2.75 2.75 0 0 1 6 10.25h.25zm6.742-.5a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M10 6.5a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2zm8 3.75A2.75 2.75 0 0 1 20.75 13v5.354c1.154.326 2 1.387 2 2.646a.75.75 0 0 1-1.5 0 1.25 1.25 0 1 0-2.5 0 .75.75 0 0 1-1.5 0c0-1.259.846-2.32 2-2.646V13c0-.69-.56-1.25-1.25-1.25h-.246v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MachineRobot;
