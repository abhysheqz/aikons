import React from "react";
const HtmlFile_02: React.FC<
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
        d="M4.191 22.75a2.924 2.924 0 0 1-2.917-2.927L1.25 4.186A2.924 2.924 0 0 1 4.167 1.25h6.803a.97.97 0 0 1 .686.286l6.809 6.827a.98.98 0 0 1 .285.692V12H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h13.503a2.92 2.92 0 0 1-2.67 1.75zM16.804 9.46l-6.237-6.254V7.96a1.5 1.5 0 0 0 1.5 1.5zm-1.69 4.11a.75.75 0 0 0-1.364.43v5a.75.75 0 0 0 1.5 0v-2.62l.386.55a.75.75 0 0 0 1.228 0l.386-.55V19a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.364-.43l-1.136 1.622zM5.75 14a.75.75 0 1 0-1.5 0v5a.75.75 0 0 0 1.5 0v-1.75h1.5V19a.75.75 0 0 0 1.5 0v-5a.75.75 0 1 0-1.5 0v1.75h-1.5zm4.25-.75a.75.75 0 1 0 0 1.5h.5V19a.75.75 0 0 0 1.5 0v-4.25h.5a.75.75 0 0 0 0-1.5zm10.75.75a.75.75 0 1 0-1.5 0v5c0 .414.336.75.75.75h2a.75.75 0 0 0 0-1.5h-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HtmlFile_02;
