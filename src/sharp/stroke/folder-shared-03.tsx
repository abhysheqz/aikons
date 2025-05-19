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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12.006 18v3.985M20.5 22h-17M8 5.5h4m0 0h10V18H2V2h7z"
      />
    </svg>
  );
};
export default FolderShared_03;
