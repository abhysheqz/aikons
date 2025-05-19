import React from "react";
const FileLink: React.FC<
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
        d="M12 2h6a2 2 0 0 1 2 2v11.015L12.999 22H6a2 2 0 0 1-2-2V12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 15h-5a2 2 0 0 0-2 2v5M9.272 10.36a2.184 2.184 0 1 0 3.088-3.088l-1.93-1.93a2.184 2.184 0 0 0-2.968-.111m.266-2.591A2.184 2.184 0 1 0 4.64 5.728l1.93 1.93c.814.814 2.11.851 2.968.111"
      />
    </svg>
  );
};
export default FileLink;
