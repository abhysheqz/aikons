import React from "react";
const BookmarkRemove_02: React.FC<
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
        d="M15.457 2.293a1 1 0 1 0-1.414 1.414L16.336 6l-2.293 2.293a1 1 0 0 0 1.414 1.414l2.293-2.293 2.293 2.293a1 1 0 0 0 1.414-1.414L19.164 6l2.293-2.293a1 1 0 0 0-1.414-1.414L17.75 4.586zM5.75 2.25h6.615a2.5 2.5 0 0 0 .617 2.518L14.215 6l-1.233 1.232a2.5 2.5 0 0 0 3.536 3.536l1.232-1.232 1.232 1.232q.24.236.518.398V22a.75.75 0 0 1-1.103.662L11.25 18.85l-7.147 3.812A.75.75 0 0 1 3 22V5a2.75 2.75 0 0 1 2.75-2.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BookmarkRemove_02;
