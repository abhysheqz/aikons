import React from "react";
const FileAttachment: React.FC<
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
        d="M7.75 3.25c-1.39 0-2.5 1.112-2.5 2.462V9.48h-2V5.71c0-2.474 2.025-4.461 4.5-4.461s4.5 1.987 4.5 4.462v3.807c0 1.519-1.241 2.731-2.75 2.731s-2.75-1.212-2.75-2.73V5.711h2v3.807c0 .393.326.731.75.731a.74.74 0 0 0 .75-.73V5.711c0-1.35-1.109-2.462-2.5-2.462"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.25 10.73.001 12.02h10.11l7.389-7.38V1.25h-9.41a5.68 5.68 0 0 1 2.16 4.462v3.807c0 2.223-1.816 3.981-4 3.981a4 4 0 0 1-3.812-2.77zm9.312 10.065L18.8 14.54h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileAttachment;
