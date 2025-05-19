import React from "react";
const FileCorrupt: React.FC<
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
        d="M3.274 19.823a2.924 2.924 0 0 0 2.917 2.927h2.074l2.366-2.704-1.838-1.839a1 1 0 0 1 0-1.414L10.586 15l-1.293-1.293a1 1 0 1 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414L10.914 17.5l1.793 1.793a1 1 0 0 1 .046 1.366l-1.83 2.091h6.91a2.924 2.924 0 0 0 2.917-2.932V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H6.168A2.924 2.924 0 0 0 3.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileCorrupt;
