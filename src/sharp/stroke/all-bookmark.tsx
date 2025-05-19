import React from "react";
const AllBookmark: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 2h12v16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3 5.01A.01.01 0 0 1 3.01 5h14.98a.01.01 0 0 1 .01.01V22l-7.5-4L3 22z"
      />
    </svg>
  );
};
export default AllBookmark;
