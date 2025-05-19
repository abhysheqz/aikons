import React from "react";
const FileUnknown: React.FC<
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
        d="M7 11v.5M5 4a2 2 0 0 1 2-2c1.075 0 2 .81 2 1.919 0 .379-.112.75-.322 1.064L7.555 6.668A3.3 3.3 0 0 0 7 8.5M12 2h6a2 2 0 0 1 2 2v11.015L12.999 22H6a2 2 0 0 1-2-2v-7.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 15h-5a2 2 0 0 0-2 2v5"
      />
    </svg>
  );
};
export default FileUnknown;
