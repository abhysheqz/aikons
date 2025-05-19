import React from "react";
const FilePound: React.FC<
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
        d="M11.5 22.002H5a2 2 0 0 1-2-2V9.817A2 2 0 0 1 3.587 8.4l5.829-5.817A2 2 0 0 1 10.829 2H18a2 2 0 0 1 2 2v7"
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
        d="M21 22h-6a2 2 0 0 0 2-2v-4a2 2 0 1 1 4 0m-6 3h4"
      />
    </svg>
  );
};
export default FilePound;
