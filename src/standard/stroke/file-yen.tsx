import React from "react";
const FileYen: React.FC<
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
        d="M12 22.002H5a2 2 0 0 1-2-2V9.817A2 2 0 0 1 3.587 8.4l5.829-5.817A2 2 0 0 1 10.829 2H18a2 2 0 0 1 2 2v4.987"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9.001h5a2 2 0 0 0 2-2v-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 13c.2.917 1.08 2.5 3 3.5m0 0c1.92-1 2.8-2.583 3-3.5m-3 3.5V22m2.5-3.317h-5"
      />
    </svg>
  );
};
export default FileYen;
