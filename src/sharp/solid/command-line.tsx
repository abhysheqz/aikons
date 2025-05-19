import React from "react";
const CommandLine: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v5.25H2.25zM8 4.25H6v2h2zm2 0h2v2h-2zM21.75 9.75V21a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V9.75zm-7.281 4.53 1.47 1.47-1.47 1.47 1.06 1.06 2.53-2.53-2.53-2.53zm-6-1.06 1.061 1.06-1.47 1.47 1.47 1.47-1.06 1.06-2.53-2.53zm3.82-.707-2 6 1.423.474 2-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CommandLine;
