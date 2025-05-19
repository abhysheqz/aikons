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
        fill="currentColor"
        fillRule="evenodd"
        d="M10.829 1a3 3 0 0 0-2.12.876L2.881 7.693A3 3 0 0 0 2 9.817v10.185a3 3 0 0 0 3 3h4.5a1 1 0 0 0 0-2H5a1 1 0 0 1-1-1v-10h4a3 3 0 0 0 3-3V3h7a1 1 0 0 1 1 1v8.5a1 1 0 1 0 2 0V4a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18 16 3 3.003L18 22M15 16l-3 2.985L15 22"
      />
    </svg>
  );
};
export default DocumentCode;
