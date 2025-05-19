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
        fillRule="evenodd"
        d="M4 1a1 1 0 0 1 1 1v2.995h5a1 1 0 1 1 0 2H5L5.001 16a1 1 0 0 0 1 1H10a1 1 0 1 1 0 2H6.001a3 3 0 0 1-3-3L3 2a1 1 0 0 1 1-1m8.25 2c0-.966.784-1.75 1.75-1.75h3.086c.464 0 .909.184 1.237.513l1.914 1.914c.329.328.513.773.513 1.237V9A1.75 1.75 0 0 1 19 10.75h-5A1.75 1.75 0 0 1 12.25 9zM14 13.25A1.75 1.75 0 0 0 12.25 15v6c0 .966.784 1.75 1.75 1.75h5A1.75 1.75 0 0 0 20.75 21v-4.086c0-.464-.184-.909-.513-1.237l-1.914-1.914a1.75 1.75 0 0 0-1.237-.513z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchyFiles;
