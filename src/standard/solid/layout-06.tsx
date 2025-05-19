import React from "react";
const Layout_06: React.FC<
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
        d="M10 22.5h8.5a4 4 0 0 0 4-4V17H10zM22.5 15V9H10v6zM22.5 7V5.5a4 4 0 0 0-4-4H10V7zM8 1.5H5.5a4 4 0 0 0-4 4v13a4 4 0 0 0 4 4H8z"
      />
    </svg>
  );
};
export default Layout_06;
