import React from "react";
const Gif_02: React.FC<
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
        d="M6.25 14a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-.25h-2v3.5h2v-.5H9.5a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75zm6 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-.75v3.5H16a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-3.5H13a.75.75 0 0 1-.75-.75m5.5 0a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 0 1.5h-1.75v1h1.25a.75.75 0 0 1 0 1.5h-1.25V19a.75.75 0 0 1-1.5 0z"
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
export default Gif_02;
