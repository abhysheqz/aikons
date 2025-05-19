import React from "react";
const UsbError: React.FC<
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
        d="M15.5 10.25a.75.75 0 0 1 .658.39l6 11a.75.75 0 0 1-.658 1.11h-12a.75.75 0 0 1-.658-1.11l6-11a.75.75 0 0 1 .658-.39m-.75 9.5a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m1.512-1.25v-3h-1.5v3zM4 1.25a.75.75 0 0 0-.75.75v4.75h-1.5v10.182c0 3.213 2.574 5.818 5.75 5.818v-1.94c-2.117 0-3.833-1.736-3.833-3.878V8.689h7.666v2.243h1.917V6.75h-1.5V2a.75.75 0 0 0-.75-.75zm5 4H6v-1.5h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbError;
