import React from "react";
const UsbMemory_01: React.FC<
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
        d="M13.82 4.094a1.75 1.75 0 0 0-2.475.001l-8.242 8.246a6.05 6.05 0 0 0 0 8.555 6.045 6.045 0 0 0 8.551 0l8.25-8.246a1.75 1.75 0 0 0 0-2.476zM7.081 19.168a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.668 1.918a2 2 0 0 1 2.828 0l2.586 2.586a2 2 0 0 1 0 2.828l-2.793 2.793a1 1 0 1 1-1.414-1.414l2.793-2.793-2.586-2.586-2.793 2.793a1 1 0 1 1-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbMemory_01;
