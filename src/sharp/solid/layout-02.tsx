import React from "react";
const Layout_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v5h19.5V3a.75.75 0 0 0-.75-.75zM21.75 10H17v11.75h4a.75.75 0 0 0 .75-.75zM15 21.75V10H2.25v11c0 .414.336.75.75.75z"
      />
    </svg>
  );
};
export default Layout_02;
