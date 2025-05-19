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
        d="M2 22a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 1.25A3.75 3.75 0 0 0 3.25 5v17c0 .414.336.75.75.75h16a.75.75 0 0 0 .75-.75V5A3.75 3.75 0 0 0 17 1.25zm5 6c-1.465 0-2.679 1.168-2.679 2.64v1.587A3.64 3.64 0 0 0 8.25 14.06c0 2.052 1.693 3.69 3.75 3.69s3.75-1.638 3.75-3.69c0-1.01-.41-1.92-1.071-2.583V9.89c0-1.472-1.214-2.64-2.679-2.64m0 3.12c-.41 0-.807.065-1.179.186V9.89c0-.615.514-1.14 1.179-1.14s1.179.525 1.179 1.14v.666A3.8 3.8 0 0 0 12 10.37"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DoorLock;
