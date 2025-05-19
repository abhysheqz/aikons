import React from "react";
const StructureFolderCircle: React.FC<
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
        d="M11.898 1.94a1.75 1.75 0 0 0-1.396-.692l-2.004.002A1.75 1.75 0 0 0 6.75 3v6c0 .967.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 17.25 9V4.985a1.75 1.75 0 0 0-1.75-1.75h-2.62zM4 15A3 3 0 0 1 7 12h10a3 3 0 0 1 3 3v.385a3.752 3.752 0 0 1-1 7.365 3.75 3.75 0 0 1-1-7.365V15a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v.385a3.752 3.752 0 0 1-1 7.365 3.75 3.75 0 0 1-1-7.365z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StructureFolderCircle;
