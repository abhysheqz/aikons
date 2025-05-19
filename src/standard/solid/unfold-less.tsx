import React from "react";
const UnfoldLess: React.FC<
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
        d="M5.301 4.228A.75.75 0 0 1 6 3.75h12a.75.75 0 0 1 .507 1.303l-6 5.5a.75.75 0 0 1-1.014 0l-6-5.5a.75.75 0 0 1-.192-.825M11.493 13.447a.75.75 0 0 1 1.014 0l6 5.5A.75.75 0 0 1 18 20.25H6a.75.75 0 0 1-.507-1.303z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UnfoldLess;
