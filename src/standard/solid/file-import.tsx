import React from "react";
const FileImport: React.FC<
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
        d="M15.457 15.043a1 1 0 0 1 0 1.414l-1.293 1.293h5.586a1 1 0 1 1 0 2h-5.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.274 19.823a2.924 2.924 0 0 0 2.917 2.927h6.377l-2.409-2.409a2.25 2.25 0 0 1 0-3.182l3-3a2.25 2.25 0 0 1 3.713 2.341h3.878V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H6.168A2.924 2.924 0 0 0 3.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileImport;
