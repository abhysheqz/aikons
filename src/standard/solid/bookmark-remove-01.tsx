import React from "react";
const BookmarkRemove_01: React.FC<
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
        d="M15.457 2.293a1 1 0 1 0-1.414 1.414L16.336 6l-2.293 2.293a1 1 0 0 0 1.414 1.414l2.293-2.293 2.293 2.293a1 1 0 0 0 1.414-1.414L19.164 6l2.293-2.293a1 1 0 0 0-1.414-1.414L17.75 4.586zM5.75 2.25h6.615a2.5 2.5 0 0 0 .617 2.518L14.215 6l-1.233 1.232-.017.018H3V5a2.75 2.75 0 0 1 2.75-2.75M3 8.75V22a.75.75 0 0 0 1.103.662l7.147-3.812 7.147 3.812A.75.75 0 0 0 19.5 22V11.166a2.5 2.5 0 0 1-.518-.398L17.75 9.536l-1.232 1.232a2.5 2.5 0 0 1-4.256-2.018zm14.77-6.305-.064-.024.044.043z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BookmarkRemove_01;
