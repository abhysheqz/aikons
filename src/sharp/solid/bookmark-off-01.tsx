import React from "react";
const BookmarkOff_01: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM20.75 6.25V2a.75.75 0 0 0-.75-.75H4.785l5 5z"
      />
      <path
        fill="currentColor"
        d="M3.25 7.75v15L12 18.375l8.75 4.375v-2l-13-13zM3.25 3.25v3h3zM20.75 17.215V7.75h-9.465z"
      />
    </svg>
  );
};
export default BookmarkOff_01;
