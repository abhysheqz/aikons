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
        fill="currentColor"
        fillRule="evenodd"
        d="M3 7c0-.966.784-1.75 1.75-1.75h11c.966 0 1.75.784 1.75 1.75v15a.75.75 0 0 1-1.143.639L10.25 18.88l-6.107 3.758A.75.75 0 0 1 3 22z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.75 3a1 1 0 0 1 1-1h10a3 3 0 0 1 3 3v14a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-10a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AllBookmark;
