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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 7.5V3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4.5m2.998-3h1M14 10V8.5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1V17c0 2.05 1.234 3.728 3 4.5"
      />
      <path
        fill="currentColor"
        d="M15 18.75a.75.75 0 0 0 0 1.5zm.01 1.5a.75.75 0 0 0 0-1.5zm-.76-2.75a.75.75 0 0 0 1.5 0zm1.5-1a.75.75 0 0 0-1.5 0zM15 20.25h.01v-1.5H15zm.75-2.75v-1h-1.5v1z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.826 13.473 4.058 7.184c.342.605-.112 1.343-.826 1.343h-8.116c-.714 0-1.168-.738-.826-1.343l4.058-7.184c.357-.63 1.295-.63 1.652 0"
      />
    </svg>
  );
};
export default UsbError;
