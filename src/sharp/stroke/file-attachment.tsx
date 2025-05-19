import React from "react";
const FileAttachment: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13 21.5V15h6.5M14 2h6v13l-7 7H4V12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M4 8.23V5.463C4 3.55 5.567 2 7.5 2S11 3.55 11 5.462v3.807A1.74 1.74 0 0 1 9.25 11 1.74 1.74 0 0 1 7.5 9.27V5.461"
      />
    </svg>
  );
};
export default FileAttachment;
