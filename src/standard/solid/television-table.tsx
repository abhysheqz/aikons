import React from "react";
const TelevisionTable: React.FC<
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
        d="M5.25 4A2.75 2.75 0 0 1 8 1.25h8A2.75 2.75 0 0 1 18.75 4v5A2.75 2.75 0 0 1 16 11.75h-1.615l.25 1.5H19A2.75 2.75 0 0 1 21.75 16v4A2.75 2.75 0 0 1 19 22.75h-6.25v-8h-1.5v8H5A2.75 2.75 0 0 1 2.25 20v-4A2.75 2.75 0 0 1 5 13.25h4.365l.25-1.5H8A2.75 2.75 0 0 1 5.25 9zM7 17.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm8.25.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TelevisionTable;
