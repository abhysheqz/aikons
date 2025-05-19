import React from "react";
const Mouse_10: React.FC<
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
        d="M12.75 1.25v3.98h.75a.75.75 0 0 1 .75.752v4.004a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75V5.982a.75.75 0 0 1 .75-.751h.75V1.25c-2.808.178-4.71 1.375-5.887 3.276C4.125 6.524 3.75 9.2 3.75 11.988s.375 5.465 1.613 7.462c1.28 2.066 3.414 3.3 6.637 3.3s5.357-1.234 6.637-3.3c1.238-1.997 1.613-4.674 1.613-7.462s-.375-5.464-1.613-7.462c-1.178-1.901-3.08-3.098-5.887-3.276"
      />
      <path fill="currentColor" d="M11.25 6.732v2.503h1.5V6.732z" />
    </svg>
  );
};
export default Mouse_10;
