import React from "react";
const FileView: React.FC<
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
        d="M16 15.25c-1.642 0-3.061.883-4.014 1.673-.487.403-.88.806-1.15 1.107-.136.15-.437.521-.437.521a.75.75 0 0 0 0 .898s.3.37.436.521c.271.302.664.704 1.15 1.107.954.79 2.373 1.673 4.015 1.673s3.061-.883 4.014-1.673c.487-.403.88-.806 1.15-1.107.136-.15.437-.521.437-.521a.75.75 0 0 0 0-.898s-.3-.37-.436-.521c-.271-.302-.664-.704-1.15-1.107-.954-.79-2.373-1.673-4.015-1.673m-.007 2.25c-.824 0-1.493.672-1.493 1.5s.669 1.5 1.493 1.5h.014c.825 0 1.493-.672 1.493-1.5s-.668-1.5-1.493-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.274 19.823a2.924 2.924 0 0 0 2.918 2.927h6.957a11 11 0 0 1-.96-.71c-.546-.452-.982-.9-1.283-1.234-.088-.098-.509-.61-.509-.61a2 2 0 0 1 0-2.393s.42-.511.51-.61c.3-.334.736-.78 1.281-1.233C12.222 15.104 13.923 14 16 14c1.474 0 2.759.556 3.75 1.185v-6.13a.98.98 0 0 0-.285-.692l-6.808-6.827a.97.97 0 0 0-.687-.286H5.167A2.924 2.924 0 0 0 2.25 4.186zm9.294-16.617 6.236 6.255h-4.736a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileView;
