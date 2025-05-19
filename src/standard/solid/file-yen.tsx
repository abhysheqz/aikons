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
        fill="currentColor"
        fillRule="evenodd"
        d="M10.829 1a3 3 0 0 0-2.12.877L2.881 7.693A3 3 0 0 0 2 9.817v10.185a3 3 0 0 0 3 3h7a1 1 0 1 0 0-2H5a1 1 0 0 1-1-1v-10h4a3 3 0 0 0 3-3V3h7a1 1 0 0 1 1 1v4.987a1 1 0 1 0 2 0V4a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.787 12.023a1 1 0 0 1 1.19.764c.123.566.698 1.707 2.023 2.558 1.325-.85 1.9-1.992 2.023-2.558a1 1 0 0 1 1.954.426c-.24 1.102-1.154 2.727-2.977 3.867v.603h1.5a1 1 0 1 1 0 2H19V22a1 1 0 1 1-2 0v-2.317h-1.5a1 1 0 1 1 0-2H17v-.604c-1.823-1.14-2.737-2.764-2.977-3.866a1 1 0 0 1 .764-1.19"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileYen;
