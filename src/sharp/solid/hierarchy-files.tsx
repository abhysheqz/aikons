import React from "react";
const HierarchyFiles: React.FC<
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
        d="M12.25 2a.75.75 0 0 1 .75-.75h4.81l2.94 2.94V10a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75zM12.25 14a.75.75 0 0 1 .75-.75h4.81l2.94 2.94V22a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 5V2h-2l.001 16a1 1 0 0 0 1 1h5.999v-2H5.251V7h4.999V5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchyFiles;
