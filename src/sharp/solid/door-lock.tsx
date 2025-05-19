import React from "react";
const DoorLock: React.FC<
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
        d="M21.5 22.75h-19v-2h19z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.822 9.556a3.8 3.8 0 0 1 2.357 0V8.89c0-.615-.513-1.14-1.178-1.14s-1.179.525-1.179 1.14z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 1.25a.75.75 0 0 0-.75.75v20h15.5V2a.75.75 0 0 0-.75-.75zm4.321 7.64c0-1.472 1.214-2.64 2.679-2.64s2.679 1.168 2.679 2.64v1.587a3.64 3.64 0 0 1 1.071 2.583c0 2.052-1.693 3.69-3.75 3.69s-3.75-1.638-3.75-3.69c0-1.01.41-1.92 1.071-2.583z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DoorLock;
