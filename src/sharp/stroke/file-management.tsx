import React from "react";
const FileManagement: React.FC<
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
        d="M13 21.5V15h6.5M15 2h5v13l-7 7H4v-9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8 9.773c1.767 0 3.2-1.466 3.2-3.273S9.767 3.227 8 3.227m0 6.546c-1.767 0-3.2-1.466-3.2-3.273S6.233 3.227 8 3.227m0 6.546V11m0-7.773V2M5.091 4.715l-1.09-.67M12 8.955l-1.09-.67m-.001-3.57 1.09-.67M4 8.955l1.09-.67"
      />
    </svg>
  );
};
export default FileManagement;
