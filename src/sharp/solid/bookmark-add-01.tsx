import React from "react";
const BookmarkAdd_01: React.FC<
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
        d="M19.25 7v3h-2V7h-3V5h3V2h2v3h3v2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.75 1.25H2.5a.75.75 0 0 0-.75.75v4.25h11V3.5h3zM12.75 7.75h-11v15l8.75-4.375 8.75 4.375V11.5h-3.5v-3h-3z"
      />
    </svg>
  );
};
export default BookmarkAdd_01;
