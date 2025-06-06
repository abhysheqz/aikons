import React from "react";
const Pdf_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l7 7v2m-.5-2h-4.502a2 2 0 0 1-2-2V2.5"
      />
      <path
        fill="currentColor"
        d="M21 14.75a.75.75 0 0 0 0-1.5zM18 14v-.75a.75.75 0 0 0-.75.75zm-.75 5a.75.75 0 0 0 1.5 0zm3.25-1.75a.75.75 0 0 0 0-1.5zM7 14v-.75a.75.75 0 0 0-.75.75zm-.75 5a.75.75 0 0 0 1.5 0zm6.25-5v-.75a.75.75 0 0 0-.75.75zm0 5h-.75c0 .414.336.75.75.75zm8.5-5.75h-3v1.5h3zm-3.75.75v2.5h1.5V14zm0 2.5V19h1.5v-2.5zm.75.75h2.5v-1.5H18zm-11-2.5h1.5v-1.5H7zM7.75 19v-2h-1.5v2zm0-2v-3h-1.5v3zm.75-.75H7v1.5h1.5zm.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zm4 0h1.286v-1.5H12.5zm2.25.917v1.666h1.5v-1.666zm-.964 2.583H12.5v1.5h1.286zm-.536.75v-5h-1.5v5zm1.5-1.667c0 .487-.412.917-.964.917v1.5c1.34 0 2.464-1.062 2.464-2.417zm-.964-2.583c.552 0 .964.43.964.917h1.5c0-1.355-1.123-2.417-2.464-2.417z"
      />
    </svg>
  );
};
export default Pdf_02;
