import React from "react";
const FolderShared_03: React.FC<
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
        d="M12.006 18v3.985M20.5 22h-17M8 5.5h4.018m0 0H20a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a1 1 0 0 1 1-1h5.542a1 1 0 0 1 .757.347z"
      />
    </svg>
  );
};
export default FolderShared_03;
