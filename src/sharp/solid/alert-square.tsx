import React from "react";
const AlertSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18a.75.75 0 0 0 .75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM13 17v-2h-2v2zm0-4V7h-2v6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlertSquare;
