import React from "react";
const LocationUser_04: React.FC<
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
        d="M6.25 12a5.75 5.75 0 1 1 11.5 0v2a.75.75 0 0 1-.75.75h-1.442l-1.34 4.465a.75.75 0 0 1-.718.535h-3a.75.75 0 0 1-.718-.535l-1.34-4.465H7a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.872 16.072a1 1 0 0 1 .557 1.3L4.98 21h13.984l-1.375-3.094a1 1 0 0 1 1.828-.812l1.375 3.094A2 2 0 0 1 18.963 23H4.979a2 2 0 0 1-1.858-2.742l1.451-3.629a1 1 0 0 1 1.3-.557"
      />
    </svg>
  );
};
export default LocationUser_04;
