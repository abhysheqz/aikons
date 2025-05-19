import React from "react";
const WorkflowSquare_01: React.FC<
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
        d="M5.25 3A.75.75 0 0 1 6 2.25h8a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H6A.75.75 0 0 1 5.25 8zM5.25 13a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75zM18.47 11.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.008 4.5V2h-2L1 15.5a1 1 0 0 0 1 1h3.5v-2H3l.007-8h2.999v-2zm10.994 0H19a1 1 0 0 1 1 1v7h-2v-6h-3.998zM16 16.5h-1.998v-2H16zM20 21v-2.5h-2V22a1 1 0 0 0 1 1h3v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_01;
