import React from "react";
const FolderSync: React.FC<
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
        d="M8 6.994h4.018m0 0H20a2 2 0 0 1 2 2V12m-9.982-5.006L9.3 3.397A1 1 0 0 0 8.502 3H3a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h7.018M13 15l1 2c.243-1.696 1.737-3 3.5-3 1.19 0 2.24.593 2.873 1.5M22 20l-1-2c-.243 1.696-1.737 3-3.5 3-1.19 0-2.24-.593-2.873-1.5"
      />
    </svg>
  );
};
export default FolderSync;
