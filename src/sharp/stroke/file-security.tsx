import React from "react";
const FileSecurity: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13 2.5V9h6.5m.5 3V9l-7-7H4v20h7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20 17.5V15c-2 0-3.5-1-3.5-1S15 15 13 15v2.5c0 3.5 3.5 4.5 3.5 4.5s3.5-1 3.5-4.5Z"
      />
    </svg>
  );
};
export default FileSecurity;
