import React from "react";
const DownloadCircle_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M13 8a1 1 0 1 0-2 0v4.5H9.5a1 1 0 0 0-.707 1.707l2.5 2.5a1 1 0 0 0 1.414 0l2.5-2.5A1 1 0 0 0 14.5 12.5H13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DownloadCircle_01;
