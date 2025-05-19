import React from "react";
const Structure_01: React.FC<
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
        d="M9 2.25A1.75 1.75 0 0 0 7.25 4v4c0 .966.784 1.75 1.75 1.75h2V12H7a3 3 0 0 0-3 2.999V16h-.998a2 2 0 0 0-2 2.004l.006 2.998a1 1 0 0 0 2-.004L3.002 18h3.995l-.007 2.998a1 1 0 0 0 2 .004l.007-2.998a2 2 0 0 0-2-2.004H6v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1h-.998a2 2 0 0 0-2 2.004l.006 2.998a1 1 0 0 0 2-.004L17.002 18h3.995l-.006 2.998a1 1 0 1 0 2 .004l.006-2.998a2 2 0 0 0-2-2.004H20v-1a3 3 0 0 0-3-3h-4V9.75h2A1.75 1.75 0 0 0 16.75 8V4A1.75 1.75 0 0 0 15 2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Structure_01;
