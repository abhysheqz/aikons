import React from "react";
const MoonCloud: React.FC<
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
        d="M1.375 16.625a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938 5.251 5.251 0 0 1-.747 10.447h-10.5a5.75 5.75 0 0 1-5.75-5.75"
      />
      <path
        fill="currentColor"
        d="M3.602 8.835a3.6 3.6 0 0 1-.453-1.378c1.14.329 2.407.21 3.517-.438a4.55 4.55 0 0 0 2.128-2.85 3.616 3.616 0 0 1 1.319 2.036 6.2 6.2 0 0 1 1.976-.33 5.6 5.6 0 0 0-.62-1.626 5.53 5.53 0 0 0-3.292-2.586A1 1 0 0 0 6.91 2.747c.123 1-.344 2.016-1.251 2.545-.905.527-2 .427-2.787-.175a1 1 0 0 0-1.577.551 5.61 5.61 0 0 0 2.593 6.204 5.7 5.7 0 0 1 2.09-.882q.039-.21.091-.417a3.53 3.53 0 0 1-2.467-1.738"
      />
    </svg>
  );
};
export default MoonCloud;
