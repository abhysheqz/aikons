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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm9.75 11.409v-6.19h-1.5v6.19l-1.72-1.72L8.468 13l3.53 3.531L15.53 13l-1.06-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DownloadSquare_01;
