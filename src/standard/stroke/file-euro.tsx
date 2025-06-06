import React from "react";
const FileEuro: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9.001h5a2 2 0 0 0 2-2v-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 22.002H5a2 2 0 0 1-2-2V9.817A2 2 0 0 1 3.587 8.4l5.829-5.817A2 2 0 0 1 10.829 2H18a2 2 0 0 1 2 2v6.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 15.5c-.5-1-1.306-1.5-2.394-1.5A2.606 2.606 0 0 0 16 16.606v2.788A2.606 2.606 0 0 0 18.606 22c1.088 0 1.894-.5 2.394-1.5M15 18h4"
      />
    </svg>
  );
};
export default FileEuro;
