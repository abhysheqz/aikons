import React from "react";
const FileEdit: React.FC<
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
        d="M18.47 13.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-.53.22h-2a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 .22-.53z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.274 19.823a2.924 2.924 0 0 0 2.917 2.927h5.954A2 2 0 0 1 11 22v-2a2 2 0 0 1 .586-1.414l6-6a2 2 0 0 1 2.164-.44V9.054a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H5.168A2.924 2.924 0 0 0 2.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileEdit;
