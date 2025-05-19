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
        d="M6 6.875a1.75 1.75 0 0 0-1.75 1.75v8.5a5.75 5.75 0 0 0 6.218 5.731c.255-.02.34-.339.156-.518a6.25 6.25 0 0 1 4.789-10.7.313.313 0 0 0 .337-.307V8.626A1.75 1.75 0 0 0 14 6.875z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.25 17.925a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m6.78-1.53a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47a.75.75 0 0 1 1.06 0M5.5 3.125a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4.5a1 1 0 1 1-2 0v-4.5h-5v4.5a1 1 0 0 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.75 4.875a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbConnected_03;
