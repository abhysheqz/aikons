import React from "react";
const Bookmark_02: React.FC<
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
        d="M3.47 1.345a.75.75 0 0 1 .53-.22h16a.75.75 0 0 1 .75.75v20.75L12 18.25l-8.75 4.375V1.875a.75.75 0 0 1 .22-.53"
      />
    </svg>
  );
};
export default Bookmark_02;
