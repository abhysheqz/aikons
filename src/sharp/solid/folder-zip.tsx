import React from "react";
const FolderZip: React.FC<
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
        d="M9.373 2.25H1.25v19.5h21.5V6.244H16v3.753h2v2h-2V14h2v2h-6v-2h2v-2.003h-2v-2h2V6.244h-1.609z"
      />
    </svg>
  );
};
export default FolderZip;
