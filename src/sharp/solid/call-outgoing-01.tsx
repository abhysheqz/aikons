import React from "react";
const CallOutgoing_01: React.FC<
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
        d="M5.082 11.746a21.4 21.4 0 0 0 3.165 4.006 21.5 21.5 0 0 0 4.006 3.165l3.578-3.838 6.918 3.94c-1.004 1.864-3.412 4.248-6.471 3.632-1.446-.292-2.873-.778-4.598-1.768a23.3 23.3 0 0 1-4.833-3.726 23.3 23.3 0 0 1-3.73-4.838c-.99-1.725-1.477-3.152-1.769-4.597C.732 4.662 3.116 2.254 4.98 1.25l3.94 6.918z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.586 5-1.293-1.293 1.414-1.414L22.414 6l-3.707 3.707-1.414-1.414L18.586 7H13V5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallOutgoing_01;
