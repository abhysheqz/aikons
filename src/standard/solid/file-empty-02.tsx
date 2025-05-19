import React from "react";
const FileEmpty_02: React.FC<
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
        d="M6.191 22.75a2.924 2.924 0 0 1-2.917-2.927L3.25 4.186A2.924 2.924 0 0 1 6.167 1.25h6.803a.97.97 0 0 1 .686.286l6.809 6.827a.98.98 0 0 1 .285.692v10.763a2.924 2.924 0 0 1-2.917 2.932zM18.804 9.46l-6.237-6.254V7.96a1.5 1.5 0 0 0 1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileEmpty_02;
