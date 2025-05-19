import React from "react";
const DoorLock: React.FC<
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
        d="M3 22h18"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 22V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v17"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.929 11.808V9.89C13.929 8.846 13.065 8 12 8s-1.929.846-1.929 1.89v1.918M12 17c-1.657 0-3-1.316-3-2.94s1.343-2.94 3-2.94 3 1.316 3 2.94S13.657 17 12 17Z"
      />
    </svg>
  );
};
export default DoorLock;
