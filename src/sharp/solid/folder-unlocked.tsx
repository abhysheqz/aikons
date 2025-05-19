import React from "react";
const FolderUnlocked: React.FC<
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
        d="M18.5 13.75a1 1 0 0 0-1 1v.5h5.25v6.5h-8.5v-6.5H16v-.5a2.5 2.5 0 0 1 4.25-1.786l-1.05 1.072a1 1 0 0 0-.7-.286"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5H13V14h1.825a3.751 3.751 0 0 1 7.35 0h.575V6.244H12.391z"
      />
    </svg>
  );
};
export default FolderUnlocked;
