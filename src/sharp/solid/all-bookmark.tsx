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
        d="M2 5.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v17.25l-8.25-4.4L2 22.75z"
      />
      <path fill="currentColor" d="M20 3.25H9.25v-2H21a1 1 0 0 1 1 1V18h-2z" />
    </svg>
  );
};
export default AllBookmark;
