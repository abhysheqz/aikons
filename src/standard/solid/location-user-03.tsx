import React from "react";
const LocationUser_03: React.FC<
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
        d="M5.77 15.861a1 1 0 0 1-.131 1.409c-.49.407-.639.788-.639 1.046 0 .39.387 1.064 1.761 1.697 1.29.593 3.14.987 5.239.987s3.95-.394 5.239-.987C18.613 19.379 19 18.707 19 18.316c0-.258-.148-.64-.639-1.046a1 1 0 0 1 1.278-1.54c.784.651 1.361 1.548 1.361 2.586 0 1.643-1.404 2.813-2.925 3.513C16.47 22.57 14.32 23 12 23s-4.469-.431-6.075-1.17C4.405 21.128 3 19.96 3 18.315c0-1.038.577-1.935 1.361-2.585a1 1 0 0 1 1.409.13"
        clipRule="evenodd"
      />
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
    </svg>
  );
};
export default LocationUser_03;
