import React from "react";
const UsbConnected_01: React.FC<
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
        d="M9 22.75v-5.5h2v5.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 1.25h-8.5v4H4a.75.75 0 0 0-.75.75v6.208l3.325 5.542h5.534l-3.043-3.043 3.182-3.182 1.793 1.793 2.708-2.708V6a.75.75 0 0 0-.75-.75h-1.75zm-1.889 4V3.028H7.639V5.25zM8.5 10h3V8h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.75 11.207-6.707 6.707-3.207-3.207 1.414-1.414 1.793 1.793 5.293-5.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbConnected_01;
