import React from "react";
const StructureFolder: React.FC<
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
        d="M11.896 1.94a1.75 1.75 0 0 0-1.396-.692l-2.004.002A1.75 1.75 0 0 0 6.748 3v6c0 .967.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 17.248 9V4.985a1.75 1.75 0 0 0-1.75-1.75h-2.62zM7 14a1 1 0 0 0-1 1v1.25h1c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 7 22.75H3A1.75 1.75 0 0 1 1.25 21v-3c0-.966.784-1.75 1.75-1.75h1V15a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1.25h1c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 21 22.75h-4A1.75 1.75 0 0 1 15.25 21v-3c0-.966.784-1.75 1.75-1.75h1V15a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StructureFolder;
