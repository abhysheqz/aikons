import React from "react";
const FileSync: React.FC<
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
        d="M13 2.5V9h6.5m.5 5V9l-7-7H4v20h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m11 16 .5 2h.5c.243-1.696 1.737-3 3.5-3 1.19 0 2.24.593 2.873 1.5M20 21l-.5-2H19c-.243 1.696-1.737 3-3.5 3-1.19 0-2.24-.593-2.873-1.5"
      />
    </svg>
  );
};
export default FileSync;
