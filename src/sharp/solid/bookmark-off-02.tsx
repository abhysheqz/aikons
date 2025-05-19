import React from "react";
const BookmarkOff_02: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM20 1.25a.75.75 0 0 1 .75.75v15.214L4.785 1.25z"
      />
      <path
        fill="currentColor"
        d="M20.75 22.75 12 18.375 3.25 22.75V3.25l17.5 17.5z"
      />
    </svg>
  );
};
export default BookmarkOff_02;
