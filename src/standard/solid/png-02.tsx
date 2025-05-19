import React from "react";
const Png_02: React.FC<
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
        d="M11.775 13.285a.75.75 0 0 1 .84.285l2.135 3.05V14a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.364.43l-2.136-3.05V19a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .524-.715M6.25 14a.75.75 0 0 1 .75-.75h1.5a2.25 2.25 0 0 1 0 4.5h-.75V19a.75.75 0 0 1-1.5 0zm1.5 2.25h.75a.75.75 0 0 0 0-1.5h-.75zm9.5-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-.25h-1.5v3.5h1.5v-.5H20a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.274 19.823a2.924 2.924 0 0 0 2.917 2.927h11.642c1.193 0 2.218-.72 2.67-1.75H7a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h12.75V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H5.168A2.924 2.924 0 0 0 2.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Png_02;
