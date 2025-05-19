import React from "react";
const GoBackwardSec_15: React.FC<
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
        d="m12 5-2-2.8q.97-.198 2-.2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.99 9.99 0 0 1 4-8"
      />
      <path
        fill="currentColor"
        d="M16 10.75a.75.75 0 0 0 0-1.5zM13 10v-.75a.75.75 0 0 0-.735.603zm-.5 2.5-.735-.147a.75.75 0 0 0 1.002.848zm.407-.155.267.7zm1.85-.129-.167.731zM13.25 15a.75.75 0 0 0-1.5 0zM9.5 10h.75a.75.75 0 0 0-1.2-.6zm-.75 6v.75h1.5V16zM16 9.25h-3v1.5h3zm-3.735.603-.5 2.5 1.47.294.5-2.5zm.502 3.348.407-.155-.534-1.402-.407.155zm2.483.574v.475h1.5v-.475zm-1 1.475h-.75v1.5h.75zm1-1a1 1 0 0 1-1 1v1.5a2.5 2.5 0 0 0 2.5-2.5zm-.66-1.303c.386.088.66.432.66.828h1.5a2.35 2.35 0 0 0-1.825-2.29zm-1.416.099a2.45 2.45 0 0 1 1.416-.099l.335-1.462a3.95 3.95 0 0 0-2.285.16zm.326 2.204a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75zM8.75 10v6h1.5v-6zm.3-.6-2 1.5.9 1.2 2-1.5z"
      />
    </svg>
  );
};
export default GoBackwardSec_15;
