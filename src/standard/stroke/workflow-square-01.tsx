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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 7V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1ZM14 17v-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1ZM18.293 17.793a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586a1 1 0 0 0 0 1.414z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.006 5.5H2.008m0 0V2m0 3.5-.006 7.998a2 2 0 0 0 2 2.002H5.5m8.502 0H16m3-3v-5a2 2 0 0 0-2-2h-2.998M21.5 22H21a2 2 0 0 1-2-2v-1.5"
      />
    </svg>
  );
};
export default WorkflowSquare_01;
