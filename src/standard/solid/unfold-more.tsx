import React from "react";
const UnfoldMore: React.FC<
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
        d="M5.301 10.272A.75.75 0 0 0 6 10.75h12a.75.75 0 0 0 .507-1.303l-6-5.5a.75.75 0 0 0-1.014 0l-6 5.5a.75.75 0 0 0-.192.825M5.301 13.728A.75.75 0 0 1 6 13.25h12a.75.75 0 0 1 .507 1.303l-6 5.5a.75.75 0 0 1-1.014 0l-6-5.5a.75.75 0 0 1-.192-.825"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UnfoldMore;
