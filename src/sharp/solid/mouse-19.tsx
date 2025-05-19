import React from "react";
const Mouse_19: React.FC<
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
        d="M13.5 4.215h-.75V1.25a6.76 6.76 0 0 1 6 6.722c0 .652-.093 1.285-.266 1.884-.4 1.383-.532 3.047-.194 4.363.12.465.278 1.078.424 1.542l.038.12-.003.126c-.096 3.624-3.057 6.743-6.75 6.743s-6.653-3.119-6.75-6.743l-.003-.126.038-.12c.146-.464.305-1.077.424-1.542.338-1.316.207-2.98-.193-4.363a6.8 6.8 0 0 1-.266-1.884A6.76 6.76 0 0 1 11.25 1.25v2.965h-.75a.75.75 0 0 0-.75.751v4.008a.75.75 0 0 0 .75.751h.75v1.252h1.5V9.725h.75a.75.75 0 0 0 .75-.751V4.966a.75.75 0 0 0-.75-.751"
      />
      <path fill="currentColor" d="M11.25 5.717v2.505h1.5V5.717z" />
    </svg>
  );
};
export default Mouse_19;
