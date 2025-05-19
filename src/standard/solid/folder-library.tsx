import React from "react";
const FolderLibrary: React.FC<
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
        d="M2.33 12.023C1.985 10.91 2.8 9.75 3.986 9.75h16.028c1.187 0 2.001 1.16 1.656 2.273l-2.576 8.3A2.72 2.72 0 0 1 16.5 22.25H7.501a2.72 2.72 0 0 1-2.595-1.927zM6 5.75A1.75 1.75 0 0 0 4.25 7.5v1h15.5v-1A1.75 1.75 0 0 0 18 5.75zM8.5 1.75A1.75 1.75 0 0 0 6.75 3.5v1h10.5v-1a1.75 1.75 0 0 0-1.75-1.75z"
      />
    </svg>
  );
};
export default FolderLibrary;
