import React from "react";
const Bookmark_01: React.FC<
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
        d="M4 1.251a.75.75 0 0 0-.75.75v4.25h17.5v-4.25a.75.75 0 0 0-.75-.75zM20.75 7.751H3.25v15L12 18.376l8.75 4.375z"
      />
    </svg>
  );
};
export default Bookmark_01;
