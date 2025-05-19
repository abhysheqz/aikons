import React from "react";
const DownloadSquare_02: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm8.51 5.75a1 1 0 0 0-2 0V10h-1.5a1 1 0 0 0-.707 1.707l2.5 2.5a1 1 0 0 0 1.414 0l2.5-2.5A1 1 0 0 0 14.51 10h-1.5zM9 15.5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DownloadSquare_02;
