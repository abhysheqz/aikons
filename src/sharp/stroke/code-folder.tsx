import React from "react";
const CodeFolder: React.FC<
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
        strokeWidth={1.5}
        d="m15 12 2 2-2 2M9 12l-2 2 2 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 11-2 6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.987 6.995h5.011m0 0h9.992a.01.01 0 0 1 .01.01V20.99a.01.01 0 0 1-.01.01l-19.98-.054a.01.01 0 0 1-.01-.01V3.01A.01.01 0 0 1 2.01 3h6.985z"
      />
    </svg>
  );
};
export default CodeFolder;
