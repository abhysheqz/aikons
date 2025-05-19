import React from "react";
const FileValidation: React.FC<
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
        d="M11.25 7a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0m8.23-2.076a.75.75 0 0 1 .096 1.056l-2.5 3a.75.75 0 0 1-1.106.05l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.92.919 1.974-2.37a.75.75 0 0 1 1.056-.095"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5 2a1 1 0 0 0-1-1H5a3 3 0 0 0-3 3v11.015a1 1 0 0 0 .294.707l7.001 6.987a1 1 0 0 0 .706.293H18a3 3 0 0 0 3-3V14.5a1 1 0 1 0-2 0v5.502a1 1 0 0 1-1 1h-6.999v-3.987a3 3 0 0 0-3-3H4V4a1 1 0 0 1 1-1h5.5a1 1 0 0 0 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileValidation;
