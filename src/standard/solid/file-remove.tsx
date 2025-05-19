import React from "react";
const FileRemove: React.FC<
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
        d="M3.539 1.543a1 1 0 0 1 1.414 0l2.793 2.793 2.793-2.793a1 1 0 1 1 1.414 1.414L9.16 5.75l2.793 2.793a1 1 0 0 1-1.414 1.414L7.746 7.164 4.953 9.957A1 1 0 0 1 3.54 8.543L6.332 5.75 3.539 2.957a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.26 11.273-.014 8.54a2.924 2.924 0 0 0 2.917 2.937h6.803a.97.97 0 0 0 .687-.285l6.808-6.828a.98.98 0 0 0 .285-.692V4.182A2.924 2.924 0 0 0 17.83 1.25h-4.567a2.25 2.25 0 0 1-.425 2.591L10.928 5.75l1.91 1.909a2.25 2.25 0 1 1-3.183 3.182L7.746 8.932l-1.909 1.909a2.25 2.25 0 0 1-2.578.432m9.303 9.521L18.8 14.54h-4.737a1.5 1.5 0 0 0-1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileRemove;
