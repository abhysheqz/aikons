import React from "react";
const DocumentCode: React.FC<
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
        d="M9.5 22.002H5a2 2 0 0 1-2-2V9.817A2 2 0 0 1 3.587 8.4l5.829-5.817A2 2 0 0 1 10.829 2H18a2 2 0 0 1 2 2v8.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9.002h5a2 2 0 0 0 2-2v-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18 16 3 3.003L18 22M15 16l-3 2.985L15 22"
      />
    </svg>
  );
};
export default DocumentCode;
