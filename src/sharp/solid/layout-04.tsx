import React from "react";
const Layout_04: React.FC<
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
        d="M10 21.75V13h11.75v8a.75.75 0 0 1-.75.75zM8 21.75H3a.75.75 0 0 1-.75-.75V3A.75.75 0 0 1 3 2.25h5zM10 2.25V11h11.75V3a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default Layout_04;
