import React from "react";
const TouchInteraction_02: React.FC<
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
        d="M9.75 6.5a2.25 2.25 0 0 1 4.501-.001l.003 4.751H17.5a3.25 3.25 0 0 1 3.25 3.25v5a3.25 3.25 0 0 1-3.25 3.25h-5.502A2.75 2.75 0 0 1 9.8 21.654l-4.05-5.379a2.32 2.32 0 0 1-.004-2.877 2.27 2.27 0 0 1 3.278-.311l.002.001.723.632z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1a1 1 0 1 1 0-2h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 1 0 2H6a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TouchInteraction_02;
