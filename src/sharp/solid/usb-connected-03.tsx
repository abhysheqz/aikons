import React from "react";
const UsbConnected_03: React.FC<
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
        d="M15.5 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m-.499 6.81 2.855-2.854-1.06-1.061L15 17.939l-.741-.74-1.06 1.06z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 1.25a.75.75 0 0 0-.75.75v4.75h-1.5v10.182c0 3.213 2.574 5.818 5.75 5.818v-1.94c-2.117 0-3.833-1.736-3.833-3.878V8.689h7.666v2.243h1.917V6.75h-1.5V2a.75.75 0 0 0-.75-.75zm5 4H8v-1.5h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbConnected_03;
