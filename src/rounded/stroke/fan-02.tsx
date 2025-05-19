import React from "react";
const Fan_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.58 12.629A5.05 5.05 0 0 0 7 17.042a5.04 5.04 0 0 0 3.053 4.645c.701.3 1.052.45 1.5.15s.447-.79.447-1.77V14.5a2.5 2.5 0 0 1-2.42-1.871ZM9.5 12H3.933c-.98 0-1.47 0-1.77-.448-.3-.447-.15-.798.15-1.5A5.04 5.04 0 0 1 6.958 7c1.9 0 3.553 1.041 4.413 2.58A2.5 2.5 0 0 0 9.5 12ZM12 9.5V3.933c0-.98 0-1.47.448-1.77.447-.3.798-.15 1.5.15A5.04 5.04 0 0 1 17 6.958c0 1.9-1.041 3.553-2.58 4.413A2.5 2.5 0 0 0 12 9.5ZM12.629 14.42A2.5 2.5 0 0 0 14.5 12h5.567c.98 0 1.47 0 1.77.448.3.447.15.798-.15 1.5A5.04 5.04 0 0 1 17.042 17a5.05 5.05 0 0 1-4.413-2.58Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
};
export default Fan_02;
