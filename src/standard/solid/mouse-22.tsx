import React from "react";
const Mouse_22: React.FC<
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
        fillRule="evenodd"
        d="M11.25 1.262c-2.808.178-4.71 1.373-5.887 3.272C4.125 6.53 3.75 9.204 3.75 11.988c0 2.785.375 5.459 1.613 7.454 1.28 2.064 3.414 3.296 6.637 3.296s5.357-1.232 6.637-3.296c1.238-1.995 1.613-4.669 1.613-7.454 0-2.784-.375-5.458-1.613-7.454-1.178-1.899-3.08-3.094-5.887-3.272v3.244c.848.121 1.5.85 1.5 1.732v3a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-3a1.75 1.75 0 0 1 1.5-1.732zm.25 4.726a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_22;
