import React from "react";
const BookmarkAdd_02: React.FC<
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
        d="M18.75 6.313v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.25 10.813v-3h-3v-5h3V1.25H3a.75.75 0 0 0-.75.75v20.75L11 18.375l8.75 4.375V10.813z"
      />
    </svg>
  );
};
export default BookmarkAdd_02;
