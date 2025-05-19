import React from "react";
const DownloadSquare_01: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM13 8a1 1 0 1 0-2 0v4.5H9.5a1 1 0 0 0-.707 1.707l2.5 2.5a1 1 0 0 0 1.414 0l2.5-2.5A1 1 0 0 0 14.5 12.5H13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DownloadSquare_01;
