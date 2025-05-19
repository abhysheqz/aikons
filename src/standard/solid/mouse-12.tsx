import React from "react";
const Mouse_12: React.FC<
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
        d="M12.75 2a.75.75 0 0 0-1.5 0v2.273a12 12 0 0 1 1.5 0z"
      />
      <path
        fill="currentColor"
        d="M11.25 4.273c-2.583.162-4.357 1.17-5.47 2.805-1.179 1.731-1.53 4.042-1.53 6.423 0 2.38.351 4.691 1.53 6.422C6.998 21.71 9.007 22.75 12 22.75s5.002-1.04 6.22-2.828c1.178-1.73 1.53-4.042 1.53-6.422s-.352-4.692-1.53-6.423c-1.113-1.634-2.887-2.643-5.47-2.805v2.995c.848.122 1.5.851 1.5 1.733v2a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 9.75 11V9a1.75 1.75 0 0 1 1.5-1.733z"
      />
      <path
        fill="currentColor"
        d="M11.25 9a.25.25 0 0 1 .25-.25h1a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25z"
      />
    </svg>
  );
};
export default Mouse_12;
