import React from "react";
const Mouse_21: React.FC<
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
        d="M5.25 8a6.75 6.75 0 0 1 6-6.709v2.976a1.75 1.75 0 0 0-1.5 1.732v2a1.75 1.75 0 0 0 1.5 1.732V11a.75.75 0 0 0 1.5 0V9.731A1.75 1.75 0 0 0 14.25 8V6a1.75 1.75 0 0 0-1.5-1.732V1.29a6.75 6.75 0 0 1 5.735 8.59c-.4 1.38-.532 3.04-.194 4.355a32 32 0 0 0 .424 1.538q.038.12.035.246c-.097 3.617-3.057 6.73-6.75 6.73s-6.653-3.113-6.75-6.73a.8.8 0 0 1 .035-.246 32 32 0 0 0 .424-1.538c.338-1.315.206-2.975-.193-4.356A6.8 6.8 0 0 1 5.25 8m6.25-2.25a.25.25 0 0 0-.25.25v2c0 .137.112.25.25.25h1a.25.25 0 0 0 .25-.25V6a.25.25 0 0 0-.25-.25zm-.5 11.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_21;
