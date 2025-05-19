import React from "react";
const FolderManagement: React.FC<
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
        d="M8 6.994h4.018m0 0H22v3.003m-9.982-3.003L9 3H2v18h9M18 19.773c1.767 0 3.2-1.465 3.2-3.273 0-1.807-1.433-3.273-3.2-3.273m0 6.546c-1.767 0-3.2-1.465-3.2-3.273 0-1.807 1.433-3.273 3.2-3.273m0 6.546V21m0-7.773V12m-2.909 2.715-1.09-.67M22 18.956l-1.09-.67m-.001-3.57 1.09-.67M14 18.956l1.09-.67"
      />
    </svg>
  );
};
export default FolderManagement;
