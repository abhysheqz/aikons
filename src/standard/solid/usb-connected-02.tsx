import React from "react";
const UsbConnected_02: React.FC<
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
        d="M5.875 6.875a1.75 1.75 0 0 0-1.75 1.75v8.5a5.75 5.75 0 0 0 10.15 3.703c.155-.185-.045-.466-.287-.456a2.5 2.5 0 0 1-1.88-.73l-2.5-2.5a2.5 2.5 0 1 1 3.535-3.535l.332.332a.3.3 0 0 0 .442-.02l1.639-1.966a.3.3 0 0 0 .069-.192V8.625a1.75 1.75 0 0 0-1.75-1.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.515 11.357a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.726 1.726 4.299-5.16a1 1 0 0 1 1.408-.127M5.375 3.125a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4.5a1 1 0 1 1-2 0v-4.5h-5v4.5a1 1 0 0 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.625 4.875a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbConnected_02;
