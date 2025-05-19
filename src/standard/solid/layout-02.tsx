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
        d="M22.5 10h-5.501v12.497h-2V10H1.5v8.5a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4zM5.5 1.5a4 4 0 0 0-4 4V8h21V5.5a4 4 0 0 0-4-4z"
      />
    </svg>
  );
};
export default Layout_02;
