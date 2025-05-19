import React from "react";
const UsbMemory_02: React.FC<
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
        d="M6.25 8.625c0-.966.784-1.75 1.75-1.75h8c.966 0 1.75.784 1.75 1.75v8.5a5.75 5.75 0 0 1-11.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 3.125a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4.5a1 1 0 1 1-2 0v-4.5h-5v4.5a1 1 0 0 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.75 4.875a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbMemory_02;
