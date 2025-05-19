import React from "react";
const HandPointingDown_04: React.FC<
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
        d="M3.25 9.078c0-.74.22-1.464.63-2.08L6.485 3.09a3.75 3.75 0 0 1 3.12-1.67H17a3.75 3.75 0 0 1 3.75 3.75v6a2.25 2.25 0 0 1-2.25 2.25h-.333v-2.75a.45.45 0 1 0-.9 0v2.892a2.25 2.25 0 0 1-1.767.858h-.772v-3.105a.45.45 0 1 0-.9 0v3.672a2.24 2.24 0 0 1-1.328.433s-.457.016-.75 0c-.19-.01-.485-.043-.485-.043v-3.128a.45.45 0 1 0-.9 0v8.387a1.281 1.281 0 0 1-2.563 0V9.67a.45.45 0 1 0-.9 0v4.963l-2.554-2.554A3.75 3.75 0 0 1 3.25 9.427z"
      />
    </svg>
  );
};
export default HandPointingDown_04;
