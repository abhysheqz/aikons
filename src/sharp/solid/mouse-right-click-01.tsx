import React from "react";
const MouseRightClick_01: React.FC<
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
        d="M21.75 5.777c-.269-1.716-1.079-3.264-2.256-4.527l-1.463 1.364c.933 1 1.543 2.19 1.744 3.473z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 1.266V5.25H12a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-.75V12h-1.5v-1.25H9a.75.75 0 0 1-.75-.75V6A.75.75 0 0 1 9 5.25h.75V1.266c-.706.028-1.4.094-2.077.178-2.799.345-4.962 2.666-5.18 5.408C2.361 8.515 2.25 10.238 2.25 12s.11 3.485.243 5.148c.218 2.742 2.381 5.063 5.18 5.408.916.113 1.861.194 2.827.194s1.911-.081 2.827-.194c2.799-.345 4.962-2.666 5.18-5.408.132-1.663.243-3.386.243-5.148s-.11-3.485-.243-5.148c-.218-2.742-2.381-5.063-5.18-5.408-.678-.084-1.371-.15-2.077-.178"
      />
      <path fill="currentColor" d="M11.25 6.75h-1.5v2.5h1.5z" />
    </svg>
  );
};
export default MouseRightClick_01;
