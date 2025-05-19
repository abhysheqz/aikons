import React from "react";
const DocumentValidation: React.FC<
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
        d="M6 13h6M6 17h10M10.5 2H2.01a.01.01 0 0 0-.01.01v19.98q0 .01.01.01h17.98a.01.01 0 0 0 .01-.01v-7.622"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14.75 7 1.5 1.5 3-3M22 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
    </svg>
  );
};
export default DocumentValidation;
