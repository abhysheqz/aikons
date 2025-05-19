import React from "react";
const FolderDownload: React.FC<
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
        d="M18.043 21.457a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414l-1.293 1.293V12.75a1 1 0 1 0-2 0v5.586l-1.293-1.293a1 1 0 0 0-1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h12.568l-2.409-2.409a2.25 2.25 0 0 1 2.341-3.713V12.75a2.25 2.25 0 0 1 4.5 0v2.878c.57-.2 1.203-.165 1.75.106v-6.74A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderDownload;
