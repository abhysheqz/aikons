import React from "react";
const HierarchyCircle_02: React.FC<
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
        d="M5 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5M19 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.571 12.732C6.555 12.117 7.955 12 9.653 12h4.694c1.698 0 3.098.117 4.082.732 1.119.7 1.469 1.862 1.568 3.194a1 1 0 1 1-1.994.148c-.084-1.12-.335-1.459-.634-1.646-.435-.271-1.27-.428-3.022-.428H9.653c-1.752 0-2.587.157-3.022.428-.299.187-.55.525-.634 1.646a1 1 0 1 1-1.994-.148c.099-1.332.449-2.494 1.568-3.194"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 1.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5"
      />
    </svg>
  );
};
export default HierarchyCircle_02;
