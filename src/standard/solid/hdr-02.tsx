import React from "react";
const Hdr_02: React.FC<
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
        d="M2.024 19.823a2.924 2.924 0 0 0 2.917 2.927h11.642c1.193 0 2.218-.72 2.67-1.75H7a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h12.5V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H4.918A2.924 2.924 0 0 0 2 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.25 14a.75.75 0 0 1 .75-.75h1.5a2.25 2.25 0 0 1 1.227 4.136l.873 1.164a.75.75 0 1 1-1.2.9l-1.275-1.7h-.375V19a.75.75 0 0 1-1.5 0zm1.5 2.25h.75a.75.75 0 0 0 0-1.5h-.75zM11.75 14a.75.75 0 0 1 .75-.75h1A2.75 2.75 0 0 1 16.25 16v1a2.75 2.75 0 0 1-2.75 2.75h-1a.75.75 0 0 1-.75-.75zm1.5.75v3.5h.25c.69 0 1.25-.56 1.25-1.25v-1c0-.69-.56-1.25-1.25-1.25zM7 13.25a.75.75 0 0 1 .75.75v1.75h1.5V14a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.5 0v-1.75h-1.5V19a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hdr_02;
